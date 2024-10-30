import nopixelBody from '../../../images/nopixel/body.png';
import noPixelLine from '../../../images/nopixel/line.png';
import noPixelLine2 from '../../../images/nopixel/line2.png';

export const InventoryInformation = () => {
  return (
    <div className="inventory_information">
      {/* Keys indicator */}
      <div className="exit_box">
        <div className="exit">Exit</div>
        <div className="escape">Escape</div>
      </div>

      {/* Body title */}
      <div className="title_box">
        <div className="body_icon_box"></div>

        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '12px', marginBottom: '5px' }}>
          <span className="body-text">Body</span>
          <span className="body-weight">5.0kg/125.0kg</span>
        </div>
      </div>

      {/* Body image */}
      <div className="character-tracers">
        <img src={nopixelBody} alt="bodyimage" className="body-image" />

        <div className="left-leg part" style={{ alignItems: 'flex-end' }}>
          <div style={{ marginBottom: '-20px' }}>
            <span className="body-part">Left Leg</span>

            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>

          <img src={noPixelLine} style={{ width: '8rem', objectFit: 'cover' }} />
        </div>

        <div className="right-leg part" style={{ alignItems: 'flex-start' }}>
          <div style={{ marginBottom: '-20px' }}>
            <span className="body-part">Right Leg</span>
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>

          <img src={noPixelLine2} style={{ width: '8rem', objectFit: 'cover' }} />
        </div>

        <div className="body part" style={{ alignItems: 'flex-end' }}>
          <div style={{ marginBottom: '-20px' }}>
            <span className="body-part">Body</span>
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>

          <img src={noPixelLine} style={{ width: '8rem', objectFit: 'cover' }} />
        </div>

        <div className="right-arm part" style={{ alignItems: 'flex-start' }}>
          <div style={{ marginBottom: '-20px' }}>
            <span className="body-part">Right arm</span>
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>

          <img src={noPixelLine2} style={{ width: '8rem', objectFit: 'cover' }} />
        </div>

        <div className="left-arm part" style={{ alignItems: 'flex-end' }}>
          <div style={{ marginBottom: '-20px' }}>
            <span className="body-part">Left arm</span>
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>
          <img src={noPixelLine} style={{ width: '8rem', objectFit: 'cover' }} />
        </div>

        <div className="head part" style={{ alignItems: 'flex-end' }}>
          <div style={{ marginBottom: '-20px' }}>
            <span className="body-part">Head</span>
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>
          <img src={noPixelLine} style={{ width: '8rem', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Personal information */}
      <div className="personal_information">
        <div className="personal-title-box">
          <div className="personal-title-item" />
          <span className="personal-title">Personal information</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', height: '35px', margin: '25px 0' }}>
              <div style={{ width: '3px', height: '100%', backgroundColor: '#7C8CC6', marginRight: '8px' }} />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: '#888c94' }}>Personal vehicle</span>
                <span style={{ fontSize: '12px', fontWeight: '600' }}>N/A</span>
              </div>
            </div>

            <div style={{ display: 'flex', height: '35px' }}>
              <div style={{ width: '3px', height: '100%', backgroundColor: '#ABDC89', marginRight: '8px' }} />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: '#888c94' }}>Phone number</span>
                <span style={{ fontSize: '12px', fontWeight: '600' }}>555-413-5126</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', height: '35px', margin: '25px 0' }}>
              <div style={{ width: '3px', height: '100%', backgroundColor: '#AB65CE', marginRight: '8px' }} />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: '#888c94' }}>Bobby bourne</span>
                <span style={{ fontSize: '12px', fontWeight: '600' }}>Citizen ID: 1002</span>
              </div>
            </div>

            <div style={{ display: 'flex', height: '35px' }}>
              <div style={{ width: '3px', height: '100%', backgroundColor: '#D6945F', marginRight: '8px' }} />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: '#888c94' }}>Home Location</span>
                <span style={{ fontSize: '12px', fontWeight: '600' }}>Little Seoul Apartments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
