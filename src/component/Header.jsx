import '../style/Header.css'

import image from '../assets/st.png'

const Header = () => {
  return (
    <div>
      <h3>SAEED</h3>
      <div className="perovt">
        <p style={{padding:'10px'}}>Perfomance Over time(second)</p>
        <img src={image} alt="" />
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <p style={{
                color:"#5f88a8"
            }}>January 1</p>
            <p style={{
                color:"#5f88a8"
            }}>Feb 1</p>
            <p style={{
                color:"#5f88a8"
            }}>Mar 1</p>
            <p style={{
                color:"#5f88a8"
            }}>April 1</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
