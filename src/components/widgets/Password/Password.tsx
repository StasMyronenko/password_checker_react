import { useMemo, useState } from 'react';

import { Scale } from '../../shared/Scale/Scale';

import { getPasswordsStrengthLevel } from '../../../utils/getPasswordsStrngthLevel/getPasswordsStrengthLevel';

import './Password.scss';

export const Password = () => {
  const [password, setPassword] = useState<string>('');
  const strength = useMemo(() => getPasswordsStrengthLevel(password), [password]);
  return (
    <div className="password">
      <header>
        <h1 className="title">Check Password Strength</h1>
      </header>
      <main>
        <div className="input-div">
          <input
            data-testid="password-input"
            id="input-field"
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Scale strengthLevel={strength} />
      </main>
    </div>
  );
};

