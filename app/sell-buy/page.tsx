'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ItemSpecs {
  storage: string;
  color: string;
  screen: string;
  camera: string;
}

interface LaptopSpecs {
  processor: string;
  ram: string;
  storage: string;
  display: string;
  graphics: string;
}

interface BaseItem {
  id: number;
  title: string;
  price: string;
  category: string;
  condition: string;
  image: string;
}

interface PhoneItem extends BaseItem {
  specs: ItemSpecs;
  itemType: 'phone';
}

interface LaptopItem extends BaseItem {
  specs: LaptopSpecs;
  itemType: 'laptop';
}

interface DesktopSpecs {
  processor: string;
  ram: string;
  storage: string;
  graphics: string;
  motherboard: string;
  cooling: string;
  powerSupply: string;
  case: string;
}

interface DesktopItem extends BaseItem {
  specs: DesktopSpecs;
  itemType: 'desktop';
}

interface AudioSpecs {
  type: string;
  driver: string;
  frequency: string;
  connectivity: string;
  battery?: string;
  features: string[];
  color: string;
}

interface AudioItem extends BaseItem {
  specs: AudioSpecs;
  itemType: 'audio';
}

interface AccessorySpecs {
  type: string;
  compatibility: string[];
  features: string[];
  connectivity?: string;
  battery?: string;
  color: string;
  dimensions?: string;
}

interface AccessoryItem extends BaseItem {
  specs: AccessorySpecs;
  itemType: 'accessory';
}

interface FeaturedItem extends BaseItem {
  specs?: never;
  itemType?: never;
}

type Item = PhoneItem | LaptopItem | DesktopItem | AudioItem | AccessoryItem | FeaturedItem;

export default function SellBuy() {
  const [activeTab, setActiveTab] = useState('buy');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const laptopItems: LaptopItem[] = [
    {
      id: 1,
      title: 'MacBook Pro M3 Max',
      price: '$3499',
      category: 'Laptops',
      condition: 'New',
      image: '💻',
      itemType: 'laptop',
      specs: {
        processor: 'M3 Max 16-core',
        ram: '32GB Unified Memory',
        storage: '1TB SSD',
        display: '16.2" Liquid Retina XDR',
        graphics: '40-core GPU'
      }
    },
    {
      id: 2,
      title: 'Dell XPS 17',
      price: '$2499',
      category: 'Laptops',
      condition: 'New',
      image: '💻',
      itemType: 'laptop',
      specs: {
        processor: 'Intel Core i9-13900H',
        ram: '32GB DDR5',
        storage: '1TB NVMe SSD',
        display: '17" 4K Touch Display',
        graphics: 'NVIDIA RTX 4070'
      }
    },
    {
      id: 3,
      title: 'Razer Blade 18',
      price: '$3999',
      category: 'Laptops',
      condition: 'New',
      image: '💻',
      itemType: 'laptop',
      specs: {
        processor: 'Intel Core i9-13950HX',
        ram: '64GB DDR5',
        storage: '2TB NVMe SSD',
        display: '18" QHD+ 240Hz',
        graphics: 'NVIDIA RTX 4090'
      }
    },
    {
      id: 4,
      title: 'Lenovo ThinkPad X1 Carbon',
      price: '$1799',
      category: 'Laptops',
      condition: 'New',
      image: '💻',
      itemType: 'laptop',
      specs: {
        processor: 'Intel Core i7-1355U',
        ram: '16GB LPDDR5',
        storage: '512GB SSD',
        display: '14" WUXGA IPS',
        graphics: 'Intel Iris Xe'
      }
    }
  ];

  const phoneItems: PhoneItem[] = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max',
      price: '$1299',
      category: 'Phones',
      condition: 'New',
      image: '📱',
      specs: {
        storage: '256GB',
        color: 'Natural Titanium',
        screen: '6.7" Super Retina XDR',
        camera: '48MP Main Camera'
      },
      itemType: 'phone'
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24 Ultra',
      price: '$1199',
      category: 'Phones',
      condition: 'New',
      image: '📱',
      specs: {
        storage: '512GB',
        color: 'Titanium Gray',
        screen: '6.8" Dynamic AMOLED',
        camera: '200MP Main Camera'
      },
      itemType: 'phone'
    },
    {
      id: 3,
      title: 'Google Pixel 8 Pro',
      price: '$999',
      category: 'Phones',
      condition: 'New',
      image: '📱',
      specs: {
        storage: '128GB',
        color: 'Obsidian',
        screen: '6.7" LTPO OLED',
        camera: '50MP Main Camera'
      },
      itemType: 'phone'
    },
    {
      id: 4,
      title: 'OnePlus 12',
      price: '$899',
      category: 'Phones',
      condition: 'New',
      image: '📱',
      specs: {
        storage: '256GB',
        color: 'Flowy Emerald',
        screen: '6.82" LTPO AMOLED',
        camera: '50MP Main Camera'
      },
      itemType: 'phone'
    }
  ];

  const desktopItems: DesktopItem[] = [
    {
      id: 1,
      title: 'Ultimate Gaming PC',
      price: '$3999',
      category: 'Desktop',
      condition: 'New',
      image: '🖥️',
      itemType: 'desktop',
      specs: {
        processor: 'Intel Core i9-14900K',
        ram: '64GB DDR5 6000MHz',
        storage: '4TB NVMe Gen4 SSD',
        graphics: 'NVIDIA RTX 4090 24GB',
        motherboard: 'ASUS ROG Maximus Z790',
        cooling: 'Custom Water Cooling',
        powerSupply: '1200W Platinum',
        case: 'Lian Li O11 Dynamic EVO'
      }
    },
    {
      id: 2,
      title: 'Content Creator Workstation',
      price: '$2999',
      category: 'Desktop',
      condition: 'New',
      image: '🖥️',
      itemType: 'desktop',
      specs: {
        processor: 'AMD Ryzen 9 7950X3D',
        ram: '128GB DDR5 5200MHz',
        storage: '2TB NVMe + 8TB SSD',
        graphics: 'NVIDIA RTX 4080 16GB',
        motherboard: 'MSI MEG X670E ACE',
        cooling: 'NZXT Kraken Z73',
        powerSupply: '1000W Titanium',
        case: 'Fractal Design Torrent'
      }
    },
    {
      id: 3,
      title: 'Compact Gaming Desktop',
      price: '$1899',
      category: 'Desktop',
      condition: 'New',
      image: '🖥️',
      itemType: 'desktop',
      specs: {
        processor: 'AMD Ryzen 7 7800X3D',
        ram: '32GB DDR5 5600MHz',
        storage: '2TB NVMe SSD',
        graphics: 'NVIDIA RTX 4070 Ti',
        motherboard: 'ASUS ROG STRIX B650E-I',
        cooling: 'Noctua NH-U12A',
        powerSupply: '850W Gold',
        case: 'NR200P MAX'
      }
    },
    {
      id: 4,
      title: 'Professional Workstation',
      price: '$4499',
      category: 'Desktop',
      condition: 'New',
      image: '🖥️',
      itemType: 'desktop',
      specs: {
        processor: 'Intel Xeon W9-3495X',
        ram: '256GB DDR5 ECC',
        storage: '4TB NVMe + 16TB HDD',
        graphics: 'NVIDIA RTX 6000 Ada',
        motherboard: 'ASUS Pro WS W790E-SAGE SE',
        cooling: 'Dual 360mm AIO',
        powerSupply: '1600W Titanium',
        case: 'Phanteks Enthoo 719'
      }
    }
  ];

  const audioItems: AudioItem[] = [
    {
      id: 1,
      title: 'Sony WH-1000XM5',
      price: '$399',
      category: 'Audio',
      condition: 'New',
      image: '🎧',
      itemType: 'audio',
      specs: {
        type: 'Over-ear Headphones',
        driver: '30mm Dynamic',
        frequency: '4Hz-40,000Hz',
        connectivity: 'Bluetooth 5.2, 3.5mm',
        battery: 'Up to 30 hours',
        features: [
          'Active Noise Cancellation',
          'LDAC Support',
          'Touch Controls',
          'Multipoint Connection'
        ],
        color: 'Black'
      }
    },
    {
      id: 2,
      title: 'Apple AirPods Pro 2',
      price: '$249',
      category: 'Audio',
      condition: 'New',
      image: '🎧',
      itemType: 'audio',
      specs: {
        type: 'In-ear TWS',
        driver: 'Custom High-excursion',
        frequency: '20Hz-20,000Hz',
        connectivity: 'Bluetooth 5.3',
        battery: '6 hours (ANC on)',
        features: [
          'Active Noise Cancellation',
          'Adaptive EQ',
          'Spatial Audio',
          'Water Resistant'
        ],
        color: 'White'
      }
    },
    {
      id: 3,
      title: 'KEF LS50 Wireless II',
      price: '$2,499',
      category: 'Audio',
      condition: 'New',
      image: '🔊',
      itemType: 'audio',
      specs: {
        type: 'Active Speakers',
        driver: 'Uni-Q 12th Gen',
        frequency: '40Hz-45,000Hz',
        connectivity: 'WiFi, Bluetooth, HDMI eARC',
        features: [
          'Hi-Res Audio',
          'Room EQ',
          'MQA Decoder',
          'Roon Ready'
        ],
        color: 'Mineral White'
      }
    },
    {
      id: 4,
      title: 'Sennheiser IE 600',
      price: '$699',
      category: 'Audio',
      condition: 'New',
      image: '🎧',
      itemType: 'audio',
      specs: {
        type: 'In-ear Monitors',
        driver: '7mm TrueResponse',
        frequency: '4Hz-20,000Hz',
        connectivity: '3.5mm/4.4mm Cable',
        features: [
          'Precision Milled Housing',
          'Detachable Cables',
          'Reference Sound',
          'Premium Carry Case'
        ],
        color: 'Zirconium'
      }
    }
  ];

  const accessoryItems: AccessoryItem[] = [
    {
      id: 1,
      title: 'Logitech MX Master 3S',
      price: '$99',
      category: 'Accessories',
      condition: 'New',
      image: '🖱️',
      itemType: 'accessory',
      specs: {
        type: 'Wireless Mouse',
        compatibility: ['Windows', 'macOS', 'Linux', 'iPadOS'],
        features: [
          '8,000 DPI Sensor',
          'Quiet Clicks',
          'USB-C Charging',
          'Multi-device Control',
          'Customizable Buttons'
        ],
        connectivity: 'Bluetooth & USB Receiver',
        battery: 'Up to 70 days',
        color: 'Graphite',
        dimensions: '124.9 x 84.3 x 51mm'
      }
    },
    {
      id: 2,
      title: 'Keychron Q1 Pro',
      price: '$199',
      category: 'Accessories',
      condition: 'New',
      image: '⌨️',
      itemType: 'accessory',
      specs: {
        type: 'Mechanical Keyboard',
        compatibility: ['Windows', 'macOS', 'Linux'],
        features: [
          'Hot-swappable',
          'QMK/VIA Support',
          'RGB Backlight',
          'Aluminum Body',
          'Gasket Mount'
        ],
        connectivity: 'USB-C & Bluetooth 5.1',
        battery: 'Up to 300 hours',
        color: 'Space Gray',
        dimensions: '327.5 x 145 x 33.5mm'
      }
    },
    {
      id: 3,
      title: 'Samsung 49" Odyssey G9',
      price: '$1,299',
      category: 'Accessories',
      condition: 'New',
      image: '🖥️',
      itemType: 'accessory',
      specs: {
        type: 'Gaming Monitor',
        compatibility: ['PC', 'Mac', 'Gaming Consoles'],
        features: [
          '5120x1440 Resolution',
          '240Hz Refresh Rate',
          '1ms Response Time',
          'HDR1000',
          'G-Sync Compatible'
        ],
        connectivity: 'DisplayPort 1.4, HDMI 2.0',
        color: 'White',
        dimensions: '1147.6 x 537.2 x 416.4mm'
      }
    },
    {
      id: 4,
      title: 'CalDigit TS4 Dock',
      price: '$399',
      category: 'Accessories',
      condition: 'New',
      image: '🔌',
      itemType: 'accessory',
      specs: {
        type: 'Thunderbolt 4 Dock',
        compatibility: ['Windows', 'macOS'],
        features: [
          '18 Ports',
          '98W Charging',
          '8K Display Support',
          '40Gbps Transfer',
          'SD Card Reader'
        ],
        connectivity: 'Thunderbolt 4',
        color: 'Space Gray',
        dimensions: '145 x 110 x 29mm'
      }
    }
  ];

  const featuredItems: FeaturedItem[] = [
    {
      id: 1,
      title: 'MacBook Pro M2',
      price: '$1299',
      category: 'Laptops',
      condition: 'New',
      image: '🖥️'
    },
    {
      id: 2,
      title: 'iPhone 15 Pro',
      price: '$999',
      category: 'Phones',
      condition: 'New',
      image: '📱'
    },
    {
      id: 3,
      title: 'Gaming PC Setup',
      price: '$2499',
      category: 'Desktop',
      condition: 'Used',
      image: '🎮'
    }
  ];

  const categories = [
    'All',
    'Laptops',
    'Phones',
    'Desktop',
    'Accessories',
    'Gaming',
    'Audio'
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category.toLowerCase());
  };

  const getDisplayItems = () => {
    switch (selectedCategory) {
      case 'phones':
        return phoneItems;
      case 'laptops':
        return laptopItems;
      case 'desktop':
        return desktopItems;
      case 'audio':
        return audioItems;
      case 'accessories':
        return accessoryItems;
      default:
        return featuredItems;
    }
  };

  const displayItems = getDisplayItems();

  const isPhoneItem = (item: Item): item is PhoneItem => {
    return (item as PhoneItem).itemType === 'phone';
  };

  const isLaptopItem = (item: Item): item is LaptopItem => {
    return (item as LaptopItem).itemType === 'laptop';
  };

  const isDesktopItem = (item: Item): item is DesktopItem => {
    return (item as DesktopItem).itemType === 'desktop';
  };

  const isAudioItem = (item: Item): item is AudioItem => {
    return (item as AudioItem).itemType === 'audio';
  };

  const isAccessoryItem = (item: Item): item is AccessoryItem => {
    return (item as AccessoryItem).itemType === 'accessory';
  };

  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent animate-gradient text-center">
            Sell & Buy Tech
          </h1>
          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg border border-[#ff0080]/20 p-1">
                <button
                  onClick={() => setActiveTab('buy')}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === 'buy'
                      ? 'bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setActiveTab('sell')}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === 'sell'
                      ? 'bg-gradient-to-r from-[#7928ca] to-[#0061ff] text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Sell
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent">
                Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`card group px-4 py-3 text-center hover:border-[#ff0080]/40 transition-all duration-300 ${
                      selectedCategory === category.toLowerCase()
                        ? 'border-[#ff0080] bg-gradient-to-r from-[#ff0080]/10 to-[#7928ca]/10'
                        : ''
                    }`}
                  >
                    <span className={`${
                      selectedCategory === category.toLowerCase()
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Items Display */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
                {selectedCategory === 'phones' ? 'Available Phones' : 
                 selectedCategory === 'laptops' ? 'Available Laptops' : 
                 selectedCategory === 'desktop' ? 'Available Desktops' :
                 selectedCategory === 'audio' ? 'Audio Equipment' :
                 selectedCategory === 'accessories' ? 'Tech Accessories' :
                 'Featured Items'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayItems.map((item) => (
                  <div key={item.id} className="card group hover:border-[#ff0080]/40 transition-all duration-300">
                    <div className="text-6xl mb-4 text-center">{item.image}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {item.title}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#ff0080] font-semibold">
                        {item.price}
                      </span>
                      <span className="text-sm text-gray-300">
                        {item.condition}
                      </span>
                    </div>
                    {isPhoneItem(item) && (
                      <div className="mb-4 p-3 bg-black/30 rounded-lg">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-300">Storage:</div>
                          <div className="text-white">{item.specs.storage}</div>
                          <div className="text-gray-300">Display:</div>
                          <div className="text-white">{item.specs.screen}</div>
                          <div className="text-gray-300">Camera:</div>
                          <div className="text-white">{item.specs.camera}</div>
                          <div className="text-gray-300">Color:</div>
                          <div className="text-white">{item.specs.color}</div>
                        </div>
                      </div>
                    )}
                    {isLaptopItem(item) && (
                      <div className="mb-4 p-3 bg-black/30 rounded-lg">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-300">Processor:</div>
                          <div className="text-white">{item.specs.processor}</div>
                          <div className="text-gray-300">RAM:</div>
                          <div className="text-white">{item.specs.ram}</div>
                          <div className="text-gray-300">Storage:</div>
                          <div className="text-white">{item.specs.storage}</div>
                          <div className="text-gray-300">Display:</div>
                          <div className="text-white">{item.specs.display}</div>
                          <div className="text-gray-300">Graphics:</div>
                          <div className="text-white">{item.specs.graphics}</div>
                        </div>
                      </div>
                    )}
                    {isDesktopItem(item) && (
                      <div className="mb-4 p-3 bg-black/30 rounded-lg">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-300">Processor:</div>
                          <div className="text-white">{item.specs.processor}</div>
                          <div className="text-gray-300">RAM:</div>
                          <div className="text-white">{item.specs.ram}</div>
                          <div className="text-gray-300">Storage:</div>
                          <div className="text-white">{item.specs.storage}</div>
                          <div className="text-gray-300">Graphics:</div>
                          <div className="text-white">{item.specs.graphics}</div>
                          <div className="text-gray-300">Motherboard:</div>
                          <div className="text-white">{item.specs.motherboard}</div>
                          <div className="text-gray-300">Cooling:</div>
                          <div className="text-white">{item.specs.cooling}</div>
                          <div className="text-gray-300">Power Supply:</div>
                          <div className="text-white">{item.specs.powerSupply}</div>
                          <div className="text-gray-300">Case:</div>
                          <div className="text-white">{item.specs.case}</div>
                        </div>
                      </div>
                    )}
                    {isAudioItem(item) && (
                      <div className="mb-4 p-3 bg-black/30 rounded-lg">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-300">Type:</div>
                          <div className="text-white">{item.specs.type}</div>
                          <div className="text-gray-300">Driver:</div>
                          <div className="text-white">{item.specs.driver}</div>
                          <div className="text-gray-300">Frequency:</div>
                          <div className="text-white">{item.specs.frequency}</div>
                          <div className="text-gray-300">Connectivity:</div>
                          <div className="text-white">{item.specs.connectivity}</div>
                          {item.specs.battery && (
                            <>
                              <div className="text-gray-300">Battery:</div>
                              <div className="text-white">{item.specs.battery}</div>
                            </>
                          )}
                          <div className="text-gray-300">Color:</div>
                          <div className="text-white">{item.specs.color}</div>
                          <div className="text-gray-300">Features:</div>
                          <div className="text-white">
                            <ul className="list-disc list-inside">
                              {item.specs.features.map((feature, index) => (
                                <li key={index} className="text-sm">{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    {isAccessoryItem(item) && (
                      <div className="mb-4 p-3 bg-black/30 rounded-lg">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-300">Type:</div>
                          <div className="text-white">{item.specs.type}</div>
                          <div className="text-gray-300">Compatible with:</div>
                          <div className="text-white">{item.specs.compatibility.join(', ')}</div>
                          {item.specs.connectivity && (
                            <>
                              <div className="text-gray-300">Connectivity:</div>
                              <div className="text-white">{item.specs.connectivity}</div>
                            </>
                          )}
                          {item.specs.battery && (
                            <>
                              <div className="text-gray-300">Battery:</div>
                              <div className="text-white">{item.specs.battery}</div>
                            </>
                          )}
                          {item.specs.dimensions && (
                            <>
                              <div className="text-gray-300">Dimensions:</div>
                              <div className="text-white">{item.specs.dimensions}</div>
                            </>
                          )}
                          <div className="text-gray-300">Color:</div>
                          <div className="text-white">{item.specs.color}</div>
                          <div className="text-gray-300">Features:</div>
                          <div className="text-white">
                            <ul className="list-disc list-inside">
                              {item.specs.features.map((feature, index) => (
                                <li key={index} className="text-sm">{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    <button className="w-full button-primary">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="card group text-center">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
                Ready to {activeTab === 'buy' ? 'Buy' : 'Sell'}?
              </h2>
              <p className="text-gray-300 mb-6">
                {activeTab === 'buy'
                  ? 'Find the best tech deals from verified sellers.'
                  : 'List your tech items and reach thousands of potential buyers.'}
              </p>
              <button className="button-primary">
                {activeTab === 'buy' ? 'Browse All Items' : 'List Your Item'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 