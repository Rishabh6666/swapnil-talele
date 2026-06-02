import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, HelpCircle, ArrowRight, Sparkles, Sliders } from 'lucide-react';

type CalcType = 'sip' | 'lumpsum';

interface DataPoint {
  year: number;
  invested: number;
  totalValue: number;
  wealthGained: number;
}

export default function GrowthVisualizer() {
  const [calcType, setCalcType] = useState<CalcType>('sip');
  const [amount, setAmount] = useState<number>(10000); // monthly SIP or lumpsum
  const [rate, setRate] = useState<number>(12); // Expected return %
  const [years, setYears] = useState<number>(15); // Duration
  const [activeHoverPoint, setActiveHoverPoint] = useState<DataPoint | null>(null);

  // Formatting utility
  const formatInr = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Math simulation calculations
  const scheduleData = useMemo(() => {
    const points: DataPoint[] = [];
    const monthlyRate = rate / 12 / 100;

    for (let currentYear = 1; currentYear <= years; currentYear++) {
      let invested = 0;
      let totalValue = 0;

      if (calcType === 'sip') {
        const totalMonths = currentYear * 12;
        invested = amount * totalMonths;
        // SIP standard formula
        totalValue = amount * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
      } else {
        invested = amount;
        // Lumpsum standard compound formula
        totalValue = amount * Math.pow(1 + rate / 100, currentYear);
      }

      const wealthGained = Math.round(Math.max(0, totalValue - invested));
      points.push({
        year: currentYear,
        invested: Math.round(invested),
        totalValue: Math.round(totalValue),
        wealthGained,
      });
    }
    return points;
  }, [calcType, amount, rate, years]);

  // Current totals
  const currentTotals = useMemo(() => {
    if (scheduleData.length === 0) return { invested: 0, wealthGained: 0, total: 0 };
    const lastPoint = scheduleData[scheduleData.length - 1];
    return {
      invested: lastPoint.invested,
      wealthGained: lastPoint.wealthGained,
      total: lastPoint.totalValue,
    };
  }, [scheduleData]);

  // SVG Chart Geometry Specs
  const width = 600;
  const height = 280;
  const paddingX = 60;
  const paddingY = 30;

  const chartGeometry = useMemo(() => {
    if (scheduleData.length === 0) return null;

    const maxVal = Math.max(...scheduleData.map((d) => d.totalValue)) || 1000;
    const minVal = 0;

    const scaleX = (year: number) => {
      // Scale year (1 to years) to coordinate range (paddingX to width - paddingX)
      if (years === 1) return width / 2;
      return paddingX + ((year - 1) / (years - 1)) * (width - 2 * paddingX);
    };

    const scaleY = (val: number) => {
      // Scale financial value to coordinate range (height - paddingY to paddingY)
      return height - paddingY - (val / maxVal) * (height - 2 * paddingY);
    };

    // Calculate path for Invested Amount
    const investedPoints = scheduleData.map((d) => `${scaleX(d.year)},${scaleY(Math.min(d.invested, d.totalValue))}`);
    const investedPath = `M ${investedPoints.join(' L ')}`;
    const investedAreaPath = `${investedPath} L ${scaleX(years)},${height - paddingY} L ${scaleX(1)},${height - paddingY} Z`;

    // Calculate path for Total Compounded Value
    const totalPoints = scheduleData.map((d) => `${scaleX(d.year)},${scaleY(d.totalValue)}`);
    const totalPath = `M ${totalPoints.join(' L ')}`;
    const totalAreaPath = `${totalPath} L ${scaleX(years)},${height - paddingY} L ${scaleX(1)},${height - paddingY} Z`;

    return {
      scaleX,
      scaleY,
      investedPath,
      investedAreaPath,
      totalPath,
      totalAreaPath,
      maxVal,
    };
  }, [scheduleData, years]);

  const handleInteractiveConsult = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Attempt to fill in calculator selections
    const messageField = document.getElementById('message-textarea') as HTMLTextAreaElement;
    if (messageField) {
      const typeLabel = calcType === 'sip' ? 'SIP Plan' : 'One-time Lumpsum Plan';
      messageField.value = `Hi Swapnil, I mapped out a ${typeLabel} on your builder. I plan to invest ${formatInr(amount)} for ${years} years with an estimated return expectation of ${rate}%. Let's review my financial objectives together!`;
      
      const event = new Event('input', { bubbles: true });
      messageField.dispatchEvent(event);
    }
  };

  return (
    <section id="growth-visualizer" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/25 inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Compounding Power Visualizer
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            See how small, disciplined amounts build immense future outcomes over time. Adjust the variables below to watch the compounding timeline grow.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Controllers Box */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl" id="calculator-panel">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sliders className="w-5 h-5 text-emerald-400" />
                <h3 className="font-display font-bold text-lg text-white">Configure Investment</h3>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-2 bg-white/5 p-1 rounded-lg gap-1 border border-white/10 mb-6 sm:mb-8">
                <button
                  type="button"
                  onClick={() => {
                    setCalcType('sip');
                    if (amount > 100000) setAmount(10000); // sensible reset
                  }}
                  className={`py-2 rounded-md font-bold text-xs sm:text-sm transition-all focus:outline-none ${
                    calcType === 'sip'
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  id="tab-sip-calc"
                >
                  Monthly SIP
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCalcType('lumpsum');
                    if (amount < 5000) setAmount(100000); // sensible reset
                  }}
                  className={`py-2 rounded-md font-bold text-xs sm:text-sm transition-all focus:outline-none ${
                    calcType === 'lumpsum'
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  id="tab-lumpsum-calc"
                >
                  One-time Lumpsum
                </button>
              </div>

              {/* Sliders Area */}
              <div className="space-y-6 sm:space-y-8">
                
                {/* 1. Investment amount */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-305 text-slate-300">
                      {calcType === 'sip' ? 'Monthly Allocation' : 'Lumpsum Principal'}
                    </span>
                    <span className="text-emerald-400 font-mono text-base font-bold bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                      {formatInr(amount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={calcType === 'sip' ? 500 : 5000}
                    max={calcType === 'sip' ? 100000 : 5000000}
                    step={calcType === 'sip' ? 500 : 5000}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    id="slider-amount"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                    <span>{calcType === 'sip' ? '₹500/mo' : '₹5,000'}</span>
                    <span>{calcType === 'sip' ? '₹1,00,000/mo' : '₹50,00,000'}</span>
                  </div>
                </div>

                {/* 2. Rate of Return expectation */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-300">Expected Annual Returns</span>
                    <span className="text-emerald-400 font-mono text-base font-bold bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                      {rate}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="22"
                    step="0.5"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    id="slider-rate"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                    <span>5% (Conservative)</span>
                    <span>22% (Highly Aggressive)</span>
                  </div>
                </div>

                {/* 3. Duration */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-300">Investment Tenor</span>
                    <span className="text-blue-400 font-mono text-base font-bold bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                      {years} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    id="slider-years"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Disclaimer disclaimer info */}
            <div className="mt-8 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-2.5 items-start">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed text-slate-300">
                Calculations are projections indicating compounding rates based on your estimated target returns. Debt or Equity Mutual funds do not provide flat guaranteed pay rates. Past returns are not guarantees.
              </p>
            </div>
          </div>

          {/* Right SVG Chart & Breakdown summary */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative" id="calculator-result-panel">
            
            {/* Top quantities summary card */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider block">Principal Invested</span>
                  <span className="text-lg sm:text-xl font-mono font-bold text-white">{formatInr(currentTotals.invested)}</span>
                </div>
                <div>
                  <span className="text-emerald-400 text-[10px] uppercase font-bold tracking-wider block">Wealth Gained</span>
                  <span className="text-lg sm:text-xl font-mono font-bold text-emerald-400">+{formatInr(currentTotals.wealthGained)}</span>
                </div>
                <div>
                  <span className="text-blue-400 text-[10px] uppercase font-bold tracking-wider block">Total Accumulated Value</span>
                  <span className="text-xl sm:text-2xl font-mono font-bold text-blue-400">{formatInr(currentTotals.total)}</span>
                </div>
              </div>

              {/* Graphic Chart representation using SVG */}
              <div className="relative mt-4 w-full bg-black/25 rounded-xl border border-white/5 p-2 overflow-x-auto min-h-[300px] flex items-center justify-center">
                {chartGeometry && (
                  <svg
                    width="100%"
                    height="100%"
                    viewBox={`0 0 ${width} ${height}`}
                    preserveAspectRatio="xMidYMid meet"
                    className="min-w-[500px]"
                    onMouseLeave={() => setActiveHoverPoint(null)}
                  >
                    {/* Define gradients */}
                    <defs>
                      <linearGradient id="totalAccumGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="0.01" />
                      </linearGradient>
                      <linearGradient id="investedGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.20" />
                        <stop offset="100%" stopColor="#475569" stopOpacity="0.01" />
                      </linearGradient>
                    </defs>

                    {/* Chart horizontal grid lines */}
                    <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                    <line x1={paddingX} y1={(height - 2*paddingY)/2 + paddingY} x2={width - paddingX} y2={(height - 2*paddingY)/2 + paddingY} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                    <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="rgba(255,255,255,0.15)" />

                    {/* Left vertical axis indicator */}
                    <text x={paddingX - 10} y={paddingY + 4} fill="rgba(255,255,255,0.3)" fontSize="9" textAnchor="end" fontFamily="monospace">
                      {formatInr(chartGeometry.maxVal)}
                    </text>
                    <text x={paddingX - 10} y={(height - 2*paddingY)/2 + paddingY + 4} fill="rgba(255,255,255,0.3)" fontSize="9" textAnchor="end" fontFamily="monospace">
                      {formatInr(chartGeometry.maxVal / 2)}
                    </text>
                    <text x={paddingX - 10} y={height - paddingY + 4} fill="rgba(255,255,255,0.3)" fontSize="9" textAnchor="end" fontFamily="monospace">
                      ₹0
                    </text>

                    {/* Area fills */}
                    <path d={chartGeometry.totalAreaPath} fill="url(#totalAccumGrad)" />
                    <path d={chartGeometry.investedAreaPath} fill="url(#investedGrad)" />

                    {/* Line strokes */}
                    <path d={chartGeometry.totalPath} fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
                    <path d={chartGeometry.investedPath} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2 2" strokeLinecap="round" />

                    {/* Time scale Labels at different years */}
                    {scheduleData.filter((_, i) => i === 0 || i === Math.floor(years / 2) || i === years - 1).map((d) => (
                      <g key={d.year}>
                        <line
                          x1={chartGeometry.scaleX(d.year)}
                          y1={height - paddingY}
                          x2={chartGeometry.scaleX(d.year)}
                          y2={height - paddingY + 5}
                          stroke="rgba(255,255,255,0.2)"
                        />
                        <text
                          x={chartGeometry.scaleX(d.year)}
                          y={height - paddingY + 18}
                          fill="rgba(255,255,255,0.4)"
                          fontSize="10"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                        >
                          Yr {d.year}
                        </text>
                      </g>
                    ))}

                    {/* Invisible hovering columns for smooth tooltip focus */}
                    {scheduleData.map((d) => {
                      const xCoord = chartGeometry.scaleX(d.year);
                      const barWidth = Math.max(10, (width - 2 * paddingX) / years);
                      return (
                        <rect
                          key={d.year}
                          x={xCoord - barWidth / 2}
                          y={paddingY}
                          width={barWidth}
                          height={height - 2 * paddingY}
                          fill="transparent"
                          className="cursor-pointer"
                          onMouseEnter={() => setActiveHoverPoint(d)}
                        />
                      );
                    })}

                    {/* Hover dot highlights */}
                    {activeHoverPoint && (
                      <g>
                        {/* Invested Dot */}
                        <circle
                          cx={chartGeometry.scaleX(activeHoverPoint.year)}
                          cy={chartGeometry.scaleY(Math.min(activeHoverPoint.invested, activeHoverPoint.totalValue))}
                          r="5"
                          fill="#94a3b8"
                          stroke="#0e1628"
                          strokeWidth="2"
                        />
                        {/* Total Future Value Dot */}
                        <circle
                          cx={chartGeometry.scaleX(activeHoverPoint.year)}
                          cy={chartGeometry.scaleY(activeHoverPoint.totalValue)}
                          r="6"
                          fill="#34d399"
                          stroke="#0e1628"
                          strokeWidth="2.5"
                        />
                        {/* Tooltip vertical trace line */}
                        <line
                          x1={chartGeometry.scaleX(activeHoverPoint.year)}
                          y1={paddingY}
                          x2={chartGeometry.scaleX(activeHoverPoint.year)}
                          y2={height - paddingY}
                          stroke="rgba(52, 211, 153, 0.4)"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                      </g>
                    )}
                  </svg>
                )}

                {/* Legend marker indicator overlay */}
                <div className="absolute top-4 right-4 bg-black/45 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 flex gap-4 text-[10px] font-sans">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-1.5 bg-slate-400 rounded inline-block"></span>
                    <span className="text-white/60">Invested Capital</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-1.5 bg-emerald-400 rounded inline-block"></span>
                    <span className="text-emerald-405 text-emerald-400">Total Accumulation</span>
                  </div>
                </div>
              </div>

              {/* Real-time slider tooltip value display */}
              {activeHoverPoint ? (
                <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between text-xs transition-colors duration-150">
                  <div className="flex gap-4">
                    <div>
                      <span className="text-white/40 uppercase block text-[9px] font-bold">Year Focused</span>
                      <span className="font-bold text-white text-sm">Year {activeHoverPoint.year}</span>
                    </div>
                    <div>
                      <span className="text-white/40 uppercase block text-[9px] font-bold">Invested</span>
                      <span className="font-mono text-slate-300">{formatInr(activeHoverPoint.invested)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 uppercase block text-[9px] font-bold">Total Estimated Value</span>
                    <span className="font-mono font-extrabold text-emerald-400 text-sm sm:text-base">{formatInr(activeHoverPoint.totalValue)}</span>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-center text-xs text-white/30 italic">
                  Hover or touch across the coordinate workspace to view specific annual progress points.
                </p>
              )}
            </div>

            {/* Simulated consultation prompt */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-white/60 text-xs text-center sm:text-left max-w-sm">
                Compounding is most powerful when done with regular consistency. Want a detailed customized SIP roadmap? Let's check together.
              </span>
              <a
                href="#contact"
                onClick={handleInteractiveConsult}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-3 rounded-xl text-xs tracking-wide uppercase transition-all shadow-lg shadow-emerald-500/25 block text-center"
                id="interactive-sip-cta"
              >
                Let’s Review this Layout
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
