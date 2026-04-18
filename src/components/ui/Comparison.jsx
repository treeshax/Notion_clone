import React from 'react';
import './css/Comparison.css';

const Comparison = () => {
  const comparisonData = [
    {
      feature: 'Speed',
      scribo: { text: 'Fast', icon: '⚡' },
      notion: { text: 'Slower' }
    },
    {
      feature: 'Simplicity',
      scribo: { text: 'Clean', icon: '✅' },
      notion: { text: 'Complex', icon: '❌' }
    },
    {
      feature: 'Learning curve',
      scribo: { text: 'Easy' },
      notion: { text: 'Medium' }
    },
    {
      feature: 'Focus',
      scribo: { text: 'Writing-first' },
      notion: { text: 'All-in-one' }
    }
  ];

  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <div className="comparison-header">
          <span className="comparison-eyebrow">Comparison</span>
          <h2 className="comparison-heading">Why Scribo over others?</h2>
          <div className="comparison-heading-accent"></div>
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Scribo</th>
                <th>Notion</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="comparison-row">
                  <td className="feature-cell">{row.feature}</td>
                  <td className="scribo-cell">
                    <span className="cell-content">
                      {row.scribo.icon && <span className="cell-icon">{row.scribo.icon}</span>}
                      {row.scribo.text}
                    </span>
                  </td>
                  <td className="notion-cell">
                    <span className="cell-content">
                      {row.notion.icon && <span className="cell-icon">{row.notion.icon}</span>}
                      {row.notion.text}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
