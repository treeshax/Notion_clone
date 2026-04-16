import { useEffect, useRef } from "react";

function Editor({ page, pages, setPages, setCurrentPage }) {

  const titleRef = useRef();
  const blockRefs = useRef([]);

  useEffect(() => {
    titleRef.current?.focus();
  }, [page]);

  if (!page) return <div className="editor">Select a page</div>;

  // ✅ Ensure at least one block exists
  if (!page.content || page.content.length === 0) {
    page.content = [""];
  }

  const updateTitle = (value) => {
    const updatedPages = pages.map((p) =>
      p.id === page.id ? { ...p, title: value } : p
    );

    setPages(updatedPages);
    setCurrentPage(updatedPages.find((p) => p.id === page.id));
  };

  const updateBlocks = (newBlocks) => {
    const updatedPages = pages.map((p) =>
      p.id === page.id ? { ...p, content: newBlocks } : p
    );

    setPages(updatedPages);
    setCurrentPage(updatedPages.find((p) => p.id === page.id));
  };

  return (
    <div className="editor">

      {/* Title */}
      <input
        ref={titleRef}
        className="title"
        value={page.title}
        onChange={(e) => updateTitle(e.target.value)}
        placeholder="Untitled"
      />

      {/* Blocks */}
      {page.content.map((block, index) => (
        <input
          key={index}
          ref={(el) => (blockRefs.current[index] = el)}
          className="block"
          value={block}
          placeholder="Type '/' for commands..."

          onChange={(e) => {
            const newBlocks = [...page.content];
            newBlocks[index] = e.target.value;
            updateBlocks(newBlocks);
          }}

          onKeyDown={(e) => {

            // ✅ Enter → create new block + move cursor
            if (e.key === "Enter") {
              e.preventDefault();
              const newBlocks = [...page.content];
              newBlocks.splice(index + 1, 0, "");
              updateBlocks(newBlocks);

              setTimeout(() => {
                blockRefs.current[index + 1]?.focus();
              }, 0);
            }

            // ✅ Backspace → delete block safely
            if (e.key === "Backspace" && block === "") {
              e.preventDefault();

              if (page.content.length === 1) return;

              const newBlocks = page.content.filter((_, i) => i !== index);
              updateBlocks(newBlocks);

              setTimeout(() => {
                blockRefs.current[index - 1]?.focus();
              }, 0);
            }
          }}
        />
      ))}
    </div>
  );
}

export default Editor;