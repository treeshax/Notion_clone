function Editor({ page }) {
  return (
    <div className="editor">
      <h1>{page.title}</h1>

      <textarea
        placeholder="Start writing..."
        defaultValue={page.content}
      />
    </div>
  );
}

export default Editor;