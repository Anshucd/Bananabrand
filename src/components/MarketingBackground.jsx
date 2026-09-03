import React from 'react';
import visual from '../assets/marketing-visual.svg';
export default function MarketingBackground({className=''}){return <div className={`marketingBackground ${className}`} aria-hidden="true"><img src={visual} alt=""/><div className="marketingGlow"/></div>}
