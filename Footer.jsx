import React from "react";

const Footer = ({ items }) => {
    const totalItems = items.length;
    const totalValue = items.reduce((acc, item) => acc + (item.packed ? 1 : 0), 0);
  const percentage = totalItems > 0 ? (totalValue / totalItems) * 100 : 0;

    return (
    <footer className="footerWrapper">
        {percentage === 100 ? (
        <div className="congratsMessage">
            <h2>Congratulations!</h2>
            <p>You have completed your shopping list!</p>
        </div>
        ) : percentage === 0 ? (
        <div className="congratsMessage">
            <h2>Welcome!</h2>
            <p>Start adding items to your shopping list.</p>
        </div>
        ) : (
        <div className="congratsMessage">
            <h2>Keep Going!</h2>
            <p>You have completed {totalValue} out of {totalItems} items.</p>
        </div>
        )}

        <h2 className="footerTitle">Shopping List Summary</h2>
        <div className="footerCounts">
        <div className="itemCount">Total items: {totalItems}</div>
        <div className="completedCount">Completed items: {totalValue}</div>
        <div className="percentageCount">{percentage.toFixed(2)}%</div>
        <div className="percentageBar">
            <div className="percentageFill" style={{ width: `${percentage}%` }}></div>
        </div>
        </div>
        <p className="footWrapper">&copy; 2025 Shopping List App</p>
    </footer>
    );
};
export default Footer;