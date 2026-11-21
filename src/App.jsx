//import "./App.css";
import { useState } from "react";

// CPU-k:
const processors = [
  { name: "Intel i5", price: 50000, image: "src/assets/intel_i5.jpg" },
  { name: "Intel i7", price: 70000, image: "src/assets/intel_i7.jpg" },
  { name: "Intel i9", price: 90000, image: "src/assets/intel_i9.jpg" },
  { name: "AMD Ryzen 9", price: 99990, image: "src/assets/amd_ryzen_9.jpg" }
];

// GPU-k:
const gpus = [
  { name: "nVidia 2070", price: 100000, image: "src/assets/geforce_rtx_2070.jpg" },
  { name: "nVidia 3050", price: 75000, image: "src/assets/geforce_rtx_3050.jpg" },
  { name: "nVidia 5060", price: 60000, image: "src/assets/geforce_rtx_5060.jpg" },
  { name: "nVidia 5090", price: 250000, image: "src/assets/geforce_rtx_5090.jpg" }
];

// memóriák:
const memories = [
  { name: "16 GB - DDR5", price: 119000, image: "src/assets/16gb_ddr5_ram.jpg" },
  { name: "32 GB - DDR5", price: 250000, image: "src/assets/32gb_ddr5_ram.jpg" },
  { name: "64 GB - DDR5", price: 490000, image: "src/assets/64gb_ddr5_ram.jpg" },
  { name: "128 GB - DDR5", price: 1010100, image: "src/assets/128gb_ddr5_ram.jpg" }
];

// alaplapok:
const mboards = [
  { name: "GIGABYTE B760M DDR4", price: 33900, image: "src/assets/motherboard_gigabyte1.jpg" },
  { name: "GIGABYTE H610M DDR4", price: 22990, image: "src/assets/motherboard_gigabyte2.jpg" },
  { name: "MSI TOMAHAWK WIFI", price: 71990, image: "src/assets/motherboard_msi.jpg" },
  { name: "ASUS PRIME B760-PLUS", price: 52890, image: "src/assets/motherboard_asus.jpg" }
];

// háttértárak:
const storages = [
  { name: "250 GB - SSD", price: 17490, image: "src/assets/ssd_250gb.jpg" },
  { name: "500 GB - SSD", price: 37000, image: "src/assets/ssd_500gb.jpg" },
  { name: "1 TB - SSD", price: 70100, image: "src/assets/ssd_1tb.jpg" },
  { name: "2 TB - SSD", price: 150000, image: "src/assets/ssd_2tb.jpg" }
];

// házak:
const cases = [
  { name: "Fehér", price: 41000, image: "src/assets/haz_feher.jpg" },
  { name: "Fekete", price: 56000, image: "src/assets/haz_fekete.jpg" },
  { name: "Szürke", price: 27000, image: "src/assets/haz_szurke.jpg" },
  { name: "Üveg", price: 180000, image: "src/assets/haz_uveg.jpg" }
];

const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-3 bg-dark text-light py-2 rounded-top">{name}</h3>
      <div className="row g-2">
        {options.map((option, index) => {
          const isSelected = selectedOption?.name === option.name;

          return (
            <div key={index} className="col-12 col-sm-6 col-xl-3">
              <div
                onClick={() => onSelect(option)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(option);
                  }
                }}
                className="card h-100"
                style={{
                  backgroundColor: isSelected ? "rgb(255, 255, 255)" : "#f8f9fa",
                  //color: isSelected ? "#ffffff" : "#212529",
                  borderColor: isSelected ? "rgb(233, 233, 233)" : "#e4e4e4",
                  cursor: "pointer",
                  transition: "transform .15s ease-out, background-color 0.2s ease",
                  transform: isSelected ? "scale(1.06)" : "scale(1)",
                  zIndex: isSelected ? "1000" : "inherit",
                  boxShadow: isSelected ? "0 1rem 3rem rgba(0, 0, 0, 0.175)" : "0 0 0 rgba(0, 0, 0, 0)"
                }}
              >

                {option.image && (
                  <div className="d-flex justify-content-center px-3">
                    <img
                      src={option.image}
                      alt={option.name}
                      style={{
                        width: "150px",
                        height: "150px",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                )}

                <div className="card-body d-flex flex-column justify-content-between">
                  <h6 className="card-title mb-2">{option.name}</h6>
                  <p className="card-text fw-bold mb-0">
                    {option.price.toLocaleString("hu-HU")} HUF
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const App = () => {
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);
  const [gpu, setGpu] = useState(null);
  const [mboard, setMboard] = useState(null);
  const [storage, setStorage] = useState(null);
  const [haz, setHaz] = useState(null);

  const selectedItems = [
    { label: "Processzor", item: processor },
    { label: "GPU", item: gpu },
    { label: "Memória", item: memory },
    { label: "Alaplap", item: mboard },
    { label: "Háttértár", item: storage },
    { label: "Ház", item: haz },
  ];

  const totalPrice = selectedItems.reduce(
    (sum, entry) => sum + (entry.item?.price || 0),
    0
  );

  const handleReset = () => {
    setProcessor(null);
    setGpu(null);
    setMemory(null);
    setMboard(null);
    setStorage(null);
    setHaz(null);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-12 py-3 mb-5 bg-dark text-light rounded-top">
          <h2>Számítógép konfigurátor</h2>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-12 col-lg-8">
          <ComponentSelector
            name="Processzorok"
            options={processors}
            selectedOption={processor}
            onSelect={setProcessor}
          />
          <ComponentSelector
            name="Videokártyák"
            options={gpus}
            selectedOption={gpu}
            onSelect={setGpu}
          />
          <ComponentSelector
            name="Memóriák"
            options={memories}
            selectedOption={memory}
            onSelect={setMemory}
          />
          <ComponentSelector
            name="Alaplapok"
            options={mboards}
            selectedOption={mboard}
            onSelect={setMboard}
          />
          <ComponentSelector
            name="Háttértárak"
            options={storages}
            selectedOption={storage}
            onSelect={setStorage}
          />
          <ComponentSelector
            name="Házak"
            options={cases}
            selectedOption={haz}
            onSelect={setHaz}
          />
        </div>

        <div className="col-12 col-lg-4">
          <div className="card p-0 sticky-top" style={{ top: "1.5rem" }}>
            <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Konfiguráció összesítő</h5>
              <button
                type="button"
                className="btn btn-sm btn-outline-light"
                onClick={handleReset}
              >
                Törlés
              </button>
            </div>

            <ul className="list-group list-group-flush text-start">
              {selectedItems.map(({ label, item }) => (
                <li
                  key={label}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div>
                    <small className="text-muted d-block">{label}</small>
                    <span className={item ? "fw-semibold" : "text-muted fst-italic"}>
                      {item ? item.name : "Nincs kiválasztva"}
                    </span>
                  </div>
                  <span className="fw-bold">
                    {item ? `${item.price.toLocaleString("hu-HU")} HUF` : "—"}
                  </span>
                </li>
              ))}
            </ul>

            <div className="card-footer bg-light d-flex justify-content-between align-items-center">
              <span className="fs-5 fw-bold">Teljes ár:</span>
              <span className="fs-5 fw-bold text-success">
                {totalPrice.toLocaleString("hu-HU")} HUF
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};