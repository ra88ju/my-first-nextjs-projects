'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [hasResult, setHasResult] = useState(false);
  const [lastWasOperator, setLastWasOperator] = useState(false);

  const handleNumber = (number: string) => {
    if (hasResult) {
      setDisplay(number);
      setEquation(number);
      setHasResult(false);
    } else {
      if (display === '0' && number !== '.') {
        setDisplay(number);
        setEquation(lastWasOperator ? equation + number : number);
      } else if (lastWasOperator) {
        setDisplay(number);
        setEquation(equation + number);
      } else {
        setDisplay(display + number);
        setEquation(equation + number);
      }
    }
    setLastWasOperator(false);
  };

  const handleOperator = (operator: string) => {
    if (equation === '') return;
    
    if (lastWasOperator) {
      // Replace the last operator
      setEquation(equation.slice(0, -3) + ` ${operator} `);
      return;
    }

    setHasResult(false);
    setLastWasOperator(true);
    setEquation(equation + ` ${operator} `);
  };

  const calculateResult = (eq: string): number => {
    // Remove any trailing operators
    const cleanEq = eq.trim().replace(/[+\-*/]\s*$/, '');
    
    // Split the equation into parts
    const parts = cleanEq.split(' ').filter(part => part !== '');
    
    if (parts.length < 3) return parseFloat(parts[0]);

    let result = parseFloat(parts[0]);
    
    for (let i = 1; i < parts.length; i += 2) {
      const operator = parts[i];
      const nextNum = parseFloat(parts[i + 1]);
      
      switch (operator) {
        case '+':
          result += nextNum;
          break;
        case '-':
          result -= nextNum;
          break;
        case '*':
          result *= nextNum;
          break;
        case '/':
          if (nextNum === 0) throw new Error('Division by zero');
          result /= nextNum;
          break;
      }
    }
    
    return result;
  };

  const handleEqual = () => {
    if (equation === '') return;
    
    try {
      const result = calculateResult(equation);
      const formattedResult = Number.isInteger(result) 
        ? result.toString()
        : result.toFixed(8).replace(/\.?0+$/, '');
      
      setDisplay(formattedResult);
      setEquation(formattedResult);
      setHasResult(true);
      setLastWasOperator(false);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setHasResult(true);
      setLastWasOperator(false);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setHasResult(false);
    setLastWasOperator(false);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl shadow-2xl p-8 space-y-6">
      {/* Glass effect container */}
      <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-inner">
        {/* Display */}
        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl mb-8">
          <div className="text-white/70 text-sm h-6 overflow-hidden font-mono">
            {equation || '0'}
          </div>
          <div className="text-4xl font-bold text-right overflow-hidden text-white">
            {display}
          </div>
        </div>
        
        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={handleClear}
            className="col-span-2 p-4 text-white bg-red-500/80 backdrop-blur-sm rounded-2xl hover:bg-red-600/90 transition-all duration-200 shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5 font-bold"
          >
            AC
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="p-4 text-white bg-violet-500/50 backdrop-blur-sm rounded-2xl hover:bg-violet-600/60 transition-all duration-200 shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 font-bold"
          >
            ÷
          </button>
          <button
            onClick={() => handleOperator('*')}
            className="p-4 text-white bg-violet-500/50 backdrop-blur-sm rounded-2xl hover:bg-violet-600/60 transition-all duration-200 shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 font-bold"
          >
            ×
          </button>
          
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="p-4 text-white bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 font-bold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('-')}
            className="p-4 text-white bg-violet-500/50 backdrop-blur-sm rounded-2xl hover:bg-violet-600/60 transition-all duration-200 shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 font-bold"
          >
            -
          </button>
          
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="p-4 text-white bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 font-bold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('+')}
            className="p-4 text-white bg-violet-500/50 backdrop-blur-sm rounded-2xl hover:bg-violet-600/60 transition-all duration-200 shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 font-bold"
          >
            +
          </button>
          
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="p-4 text-white bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 font-bold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleEqual}
            className="row-span-2 p-4 text-white bg-blue-500/80 backdrop-blur-sm rounded-2xl hover:bg-blue-600/90 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 font-bold"
          >
            =
          </button>
          
          <button
            onClick={() => handleNumber('0')}
            className="col-span-2 p-4 text-white bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 font-bold"
          >
            0
          </button>
          <button
            onClick={() => handleNumber('.')}
            className="p-4 text-white bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 font-bold"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
} 