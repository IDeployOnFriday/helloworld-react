export function ResetButton({ handleRestart }: { handleRestart: () => void }) {
  return (
    <button
      type="button"
      className="reset-button"
      onClick={handleRestart}
      aria-label="Reset game"
    >
      Reset game
    </button>
  );
}


