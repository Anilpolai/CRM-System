// src/components/ThemeSettings/ThemeSettings.jsx
import React, { useEffect, useState } from 'react';
import { Offcanvas, Form, Button } from 'react-bootstrap';

const PRESET_COLORS = [
  { name: 'Teal', value: '#0cb3a6' },
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Bule', value: '#2953c9ff' },
  { name: 'grey', value: '#655f71ff' },
  { name: 'Pink', value: '#7c6387ff' },
];

const ThemeSettings = ({ show, onHide, darkMode, setDarkMode }) => {
  const [primary, setPrimary] = useState(localStorage.getItem('primaryColor') || '#0cb3a6');

  useEffect(() => {
    applyPrimary(primary);
  }, [primary]);

  const applyPrimary = (color) => {
    document.documentElement.style.setProperty('--primary', color);
    document.documentElement.style.setProperty('--primary-hover', hexToRGBA(color, 0.1));
    document.documentElement.style.setProperty('--primary-active', hexToRGBA(color, 0.2));
    localStorage.setItem('primaryColor', color);
    setPrimary(color);
  };

  const hexToRGBA = (hex, alpha = 1) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const handleDarkToggle = (e) => {
    const isDark = e.target.checked;
    setDarkMode(isDark);
    localStorage.setItem('darkMode', isDark);
    document.body.classList.toggle('dark-mode', isDark);
  };

  const resetAll = () => {
    const d = false;
    setDarkMode(d);
    localStorage.setItem('darkMode', d);
    document.body.classList.remove('dark-mode');

    const defaultPrimary = '#0cb3a6';
    applyPrimary(defaultPrimary);
  };

  return (
    <Offcanvas show={show} onHide={onHide} placement="end" backdrop scroll>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Appearance Settings</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="mb-4">
          <Form.Check
            type="switch"
            id="dark-mode-switch"
            label="Dark Mode"
            checked={darkMode}
            onChange={handleDarkToggle}
          />
        </div>

        <div className="mb-3">
          <h6 className="mb-2">Theme Colors</h6>
          <div className="d-flex gap-2 flex-wrap">
            {PRESET_COLORS.map((c) => (
              <div
                key={c.value}
                className={`theme-dot ${primary === c.value ? 'active' : ''}`}
                style={{ backgroundColor: c.value }}
                title={c.name}
                onClick={() => applyPrimary(c.value)}
              />
            ))}
          </div>
        </div>

        <Button variant="outline-secondary" onClick={resetAll}>
          Reset to Default
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ThemeSettings;
