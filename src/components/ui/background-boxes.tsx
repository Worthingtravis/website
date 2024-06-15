import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { StarIcon } from 'lucide-react';
import { ImEvil } from 'react-icons/im';
import { TiHeartFullOutline } from 'react-icons/ti';
import {
  GiLevelEndFlag,
  GiLevelFourAdvanced,
  GiLevelTwo,
} from 'react-icons/gi';
import { AiFillDashboard } from 'react-icons/ai';

const colors = [
  '--sky-300',
  '--pink-300',
  '--green-300',
  '--yellow-300',
  '--red-300',
  '--purple-300',
  '--blue-300',
  '--indigo-300',
  '--violet-300',
];

function TryAgain(props: { onClick: () => void }) {
  return (
    <div className="absolute inset-0  z-50 flex  flex-col items-center justify-center  gap-10 rounded-lg bg-black/90 p-4">
      <h1 className="text-3xl font-bold text-white">Game Over</h1>
      <button
        onClick={props.onClick}
        className="flex h-20 w-60 items-center justify-center rounded-lg bg-white bg-gradient-to-br from-pink-300 to-slate-300 text-3xl font-bold text-black"
      >
        Try Again
      </button>
    </div>
  );
}

function StartGame(props: { onClick: () => void; level?: number }) {
  return (
    <div className="absolute inset-0 z-50 flex h-full w-full flex-col items-center justify-center gap-10 rounded-lg bg-black/90 p-4 backdrop-blur-sm">
      <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-lg">
        Welcome to The Grid Game
      </h1>

      <div className="text-center text-2xl font-semibold text-white">
        <span className="underline decoration-pink-500 decoration-4 underline-offset-4">
          How to Play:
        </span>
        <ul className="mt-2 list-inside list-disc">
          <li>Hover over boxes to score points.</li>
          <li>Lose Health when you hover over a box that is not lit up.</li>
        </ul>
      </div>

      <div className="mt-5 animate-bounce text-white">
        <button
          type="button"
          onClick={props.onClick}
          className="flex h-20 w-60 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-3xl font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:from-cyan-400 hover:to-blue-400"
        >
          {props.level === 0 ? 'Start Game' : 'Next Level'}
        </button>
      </div>
    </div>
  );
}

function ScoreSheet(props: {
  health: number;
  litCells: { [key: string]: string };
  score: number;
  level: number;
}) {
  const boxesAlive = Object.keys(props.litCells).length;
  const healthColor = `text-red-${Math.min(
    props.health,
    HEALTH
  )}00 animate-bounce`;

  return (
    <div className="space-y-4 text-4xl font-bold text-white">
      <div className="flex items-center justify-center">
        <TiHeartFullOutline className={`mr-2 h-10 w-10  ${healthColor}`} />
        Health {props.health}
      </div>
      <div className="flex items-center justify-center">
        <ImEvil className="mr-2 h-10 w-10 text-gray-500" />
        Boxes Alive {boxesAlive}
      </div>
      <div className="flex items-center justify-center">
        <StarIcon
          className={cn(
            ' mr-2 h-10 w-10 ',
            !boxesAlive
              ? 'text-yellow-300'
              : 'scale-75 text-gray-700 transition duration-300 ease-in-out'
          )}
          fill="currentColor"
        />
        Score {props.score}
      </div>
      <div className="flex items-center justify-center">
        <AiFillDashboard
          className={cn(
            ' mr-2 h-10 w-10 ',
            !boxesAlive
              ? 'text-yellow-300'
              : 'scale-75 text-emerald-600 transition duration-300 ease-in-out'
          )}
          fill="currentColor"
        />
        Level {props.level + 1}
      </div>
    </div>
  );
}

const HEALTH = 9;
const SCORE = 0;
const CELLS = {};
const LIGHT_UP_INTERVAL = [2000, 1500];
const level_score_threshold = [5, 10];
const rows = [
  new Array(2).fill(1),
  new Array(20).fill(1),
  new Array(2).fill(1),
  new Array(2).fill(1),
];

const cols = [
  new Array(2).fill(1),
  new Array(2).fill(1),
  new Array(30).fill(1),
  new Array(2).fill(1),
];
export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const [litCells, setLitCells] = useState<{ [key: string]: string }>(CELLS);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(SCORE);
  const [health, setHealth] = useState(HEALTH);
  const [roundWon, setRoundWon] = useState(false);
  const [level, setLevel] = useState(0);

  const [capturedCells, setCapturedCells] = useState<Record<string, string>>(
    {}
  );

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const lightUpCell = useCallback(() => {
    if (health <= 0) return;
    const row = Math.floor(Math.random() * rows.length);
    const col = Math.floor(Math.random() * cols.length);
    const color = getRandomColor();
    const key = `${row}-${col}`;

    setLitCells((currentLitCells) => ({
      ...currentLitCells,
      [key]: color,
    }));
  }, [setLitCells, health, rows.length, cols.length]);

  useEffect(() => {
    if (!gameStarted) return;

    // Starting the interval to light up cells.
    const interval = setInterval(lightUpCell, LIGHT_UP_INTERVAL[level]);

    if (health <= 0) {
      clearInterval(interval);
      // if (intervalScore) clearInterval(intervalScore);
    }

    // Clean up both intervals.
    return () => {
      clearInterval(interval);
      // if (intervalScore) clearInterval(intervalScore);
    };
  }, [gameStarted, lightUpCell, litCells, health]);

  const handleDelete = useCallback(
    (i, j) => {
      if (litCells[`${i}-${j}`]) {
        setLitCells((currentLitCells) => {
          const newLitCells = { ...currentLitCells };
          delete newLitCells[`${i}-${j}`];
          return newLitCells;
        });
        setCapturedCells((currentCapturedCells) => ({
          ...currentCapturedCells,
          [`${i}-${j}`]: litCells[`${i}-${j}`],
        }));
        setScore((s) => s + 1);
        if (health < HEALTH) {
          setHealth((h) => h + 1);
        }
      } else {
        setHealth((h) => h - 1);
      }
    },
    [litCells, setLitCells, setHealth, health]
  );

  const handleTryAgain = () => {
    setHealth(HEALTH);
    setLitCells({});
    setScore(0);
    setRoundWon(false);
    setGameStarted(false);
  };
  const handleStartGame = () => {
    if (roundWon) {
      setLevel(level + 1);
      setRoundWon(false);
      setGameStarted(true);
      setScore(0);
    } else {
      setLevel(0);
      setGameStarted(true);
      setHealth(HEALTH);
      setScore(0);
      setLitCells({});
    }
  };

  return (
    <>
      {health <= 0 && <TryAgain onClick={handleTryAgain} />}
      {!gameStarted && <StartGame onClick={handleStartGame} level={level} />}
      <div className="mb-96 flex flex-col items-center justify-center space-y-8">
        <h1 className="animate-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-7xl font-bold text-transparent">
          The Game of Boxes
        </h1>
        <EvilMeter
          level={level}
          health={health}
          score={score}
          numLitCells={Object.keys(litCells).length}
          handleWinGame={() => {
            setRoundWon(true);
            setGameStarted(false);
          }}
          handleLoseGame={() => {
            setHealth(0);
            setGameStarted(false);
          }}
        />
        <ScoreSheet
          health={health}
          litCells={litCells}
          score={score}
          level={level}
        />
      </div>

      {gameStarted && (
        <div className={cn('z-0 flex ', className)} {...rest}>
          {rows[level].map((_, i) => (
            <motion.div
              // eslint-disable-next-line react/no-array-index-key
              key={`row${i}`}
              id={`row${i}`}
              className="relative size-[2vw] border-l border-slate-700"
            >
              {cols[level].map((_, j) => (
                <motion.div
                  whileHover={{
                    backgroundColor: !litCells[`${i}-${j}`] ? 'red' : 'green',
                    transition: { duration: 2 },
                  }}
                  animate={{
                    backgroundColor: litCells[`${i}-${j}`]
                      ? `var(${litCells[`${i}-${j}`]})`
                      : 'transparent',
                  }}
                  onHoverStart={() => {
                    handleDelete(i, j);
                  }}
                  style={{
                    backgroundColor: litCells[`${i}-${j}`]
                      ? `var(${litCells[`${i}-${j}`]})`
                      : 'transparent',
                  }}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`col${j}`}
                  id={`col${i}`}
                  className="relative size-[2vw] border border-slate-700"
                />
              ))}
            </motion.div>
          ))}
        </div>
      )}
      <div className="sr-only hidden text-red-100 text-red-200 text-red-300 text-red-400 text-red-500 text-red-600 text-red-700 text-red-800 text-red-900" />
    </>
  );
};

export const Boxes = React.memo(BoxesCore);

function EvilMeter({
  health,
  score,
  numLitCells,
  handleWinRound,
  handleLoseGame,
  level,
}) {
  // Calculate the meter value.
  // Assuming that health + score - numLitCells can range from -100 to +100.
  // Adjust the range based on your game's logic.
  const maxMeterValue = level_score_threshold[level]; // This can be the maximum expected difference for your game.
  let meterValue = score - numLitCells * 2;

  // Normalize meterValue to be within -100 to 100 for calculation purposes
  meterValue = Math.max(-maxMeterValue, Math.min(meterValue, maxMeterValue));

  // Calculate percentage for the meter.
  const meterPercentage =
    health === 0
      ? 0
      : ((meterValue + maxMeterValue) / (2 * maxMeterValue)) * 100;

  // Determine the color of the meter based on the value.
  const meterColor = meterValue >= 0 ? 'bg-green-500' : 'bg-red-500';

  useEffect(() => {
    if (meterValue >= maxMeterValue) {
      handleWinRound();
    }
    if (health === 0) {
      handleLoseGame();
    }
    if (meterValue <= -maxMeterValue) {
      handleLoseGame();
    }
  }, [meterValue, handleWinRound]);

  return (
    <div
      className={cn(
        'h-6 w-full overflow-hidden rounded-full bg-gray-300 transition-all duration-300',
        health === 0 && 'bg-red-500'
      )}
    >
      <div
        className={`h-6 ${meterColor} transition-all duration-300`}
        style={{ width: `${meterPercentage}%` }}
      />
    </div>
  );
}
