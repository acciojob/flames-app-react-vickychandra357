import React, { useState } from 'react';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [relationship, setRelationship] = useState('');

  const calculateRelationship = () => {
    const commonLetters = getCommonLetters(name1, name2);
    const remainingLength = (name1.length + name2.length - 2 * commonLetters.length) % 6;

    switch (remainingLength) {
      case 1:
        setRelationship('Friends');
        break;
      case 2:
        setRelationship('Love');
        break;
      case 3:
        setRelationship('Affection');
        break;
      case 4:
        setRelationship('Marriage');
        break;
      case 5:
        setRelationship('Enemy');
        break;
      case 0:
        setRelationship('Siblings');
        break;
      default:
        setRelationship('');
        break;
    }
  };

  const getCommonLetters = (str1, str2) => {
    const common = [];
    const map = {};

    for (let i = 0; i < str1.length; i++) {
      const char = str1.charAt(i);
      map[char] = (map[char] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
      const char = str2.charAt(i);
      if (map[char] > 0) {
        common.push(char);
        map[char]--;
      }
    }

    return common;
  };

  const clearInputs = () => {
    setName1('');
    setName2('');
    setRelationship('');
  };

  return (
    <div>
      <h1>FLAMES Game</h1>
      <label htmlFor="name1">Name 1:</label>
      <input
        type="text"
        id="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        data-testid="input1"
      />
      <br />
      <label htmlFor="name2">Name 2:</label>
      <input
        type="text"
        id="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        data-testid="input2"
      />
      <br />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <button onClick={clearInputs} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
}

export default App;
