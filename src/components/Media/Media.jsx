import React from 'react';

// Import each image individually
import media1 from '../../assets/media/media1.jpg';
import media2 from '../../assets/media/media2.jpg';
import media3 from '../../assets/media/media3.jpg';
import media4 from '../../assets/media/media4.jpg';
import media5 from '../../assets/media/media5.jpg';
import media6 from '../../assets/media/media6.jpg';

function MediaSection() {
  const images = [media1, media2, media3, media4, media5, media6];

  return (
    <div className="border-black border rounded-md shadow-lg p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Members Attend the Republic Day Parade!</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index + 1}
            src={image}
            alt={`Media ${index + 1}`}
            className="w-full h-50 object-cover rounded-md border-black border-2 mb-2"
          />
        ))}
      </div>
      <div className="text-gray-800 mt-6">
        <p className="text-2xl mb-4 leading-7 " >
          We are delighted to share a moment
          of immense pride and honor as the esteemed members of the EBSB EDC had the privilege of attending the Republic Day Parade. This prestigious event,
          held annually in celebration of India's vibrant democracy and rich cultural heritage,
          provided our team with a unique and inspiring experience.
        </p>
        
        <p className="mb-4 leading-7 text-2xl">
          Our team found themselves amidst the awe-inspiring atmosphere of Rajpath, where the
          country's top leaders, distinguished guests, and citizens gathered to commemorate the
          historic day. The parade, featuring the impressive march-past, vibrant cultural
          performances, and awe-inspiring flypasts, left an indelible mark on our team members,
          fostering a sense of patriotism and national pride.
        </p>
        <p className="mb-4 leading-7 text-2xl">
          This unique experience has not only deepened our understanding of the significance of
          Republic Day but has also served as a source of inspiration for the EBSB EDC team.
          Witnessing the dedication of the armed forces, the display of indigenous military
          capabilities, and the vibrant cultural presentations has reinforced our commitment to
          contributing to the nation's development and fostering entrepreneurial spirit.
        </p>
        <p className="mt-4 leading-7 text-2xl">
          Attending the Republic Day Parade
          was a momentous occasion for the EBSB EDC team, filled with pride, inspiration, and a
          renewed sense of commitment to the nation. As we continue our journey in promoting
          entrepreneurship and innovation, we carry with us the spirit of Republic Day – a celebration
          of unity in diversity and a reminder of the values that define our great nation. We extend
          our heartfelt gratitude to all those who made this remarkable experience possible, and we
          look forward to contributing meaningfully to the progress and prosperity of our beloved
          country.
        </p>
      </div>
    </div>
  );
}

export default MediaSection;
