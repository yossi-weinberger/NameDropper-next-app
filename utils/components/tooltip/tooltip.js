import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <span
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      {showTooltip && <span className="tooltip">{tooltip}</span>}
    </span>
  );
};

export default Tooltip;




// import Tooltip from './Tooltip';

// const App = () => {
//   const text = 'ריאקט היא ספריית <Tooltip text="ג\'אווה סקריפט" tooltip="ג\'אווה סקריפט היא שפת תכנות פופולרית">(Javascript)</Tooltip> פופולרית לפיתוח אתרים ואפליקציות. לריאקט גמישות רבה, עקב המבנה הפשוט אך היעיל שלה. ריאקט עצמה דלה יחסית, אך היא מאפשרת לבנות על גבה מרחב אינסופי של אפשרויות. ישנם ספריות וכלים רבים שמתממשקים היטב עם ריאקט ומאפשרים לפתח באמצעותה ביעילות וברמה גבוהה.';

//   return (
//     <div>
//       <p dangerouslySetInnerHTML={{ __html: text }} />
//     </div>
//   );
// };

// export default App;