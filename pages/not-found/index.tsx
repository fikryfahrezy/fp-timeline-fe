import { useNavigate } from 'react-router-dom';
import styles from './Styles.module.css';

export function Component() {
  const navigate = useNavigate();

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center px-3">
      <main>
        <div className={`mb-4 text-5xl ${styles}`} title="~You lost in the matrix~">
          ~You lost in the matrix~
        </div>
        <button
          className={`w-100% color-accent bg-transparent border-transparent text-2xl text-center cursor-pointer ${styles.glitch}`}
          title="Get Back"
          onClick={() => {
            navigate(-1);
          }}
        >
          Get Back
        </button>
      </main>
    </div>
  );
}

Component.displayName = 'NotFound';
