import { useState } from 'react';
import './App.css';
import ReactLassoSelect, { getCanvas } from 'react-lasso-select';
import fileUrl from "./assets/artwork.png";

function App() {

  const [points, setPoints] = useState([]);
  const [clippedImg, setClippedImg] = useState();

  return (
    <div className="App">
      <table>
        <tr>
          <td style={{ textAlign: 'center' }}>
            <ReactLassoSelect
              imageStyle={{ width: '500px' }}
              value={points}
              src={fileUrl}
              onChange={value => {
                setPoints(value);
              }}
              onComplete={value => {
                if (!value.length) return;
                getCanvas(fileUrl, value, (err, canvas) => {
                  if (!err) {
                    setClippedImg(canvas.toDataURL());
                  }
                });
              }}
            />
          </td>
          <td>
            {clippedImg ?
              <div>
                <h4>Selected Color</h4>
                <img width={'170px'} src={clippedImg} alt="" />
              </div>
              : null}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
