const Hero = () => {
  return (
    <div className='grid grid-cols-12 lg:py-60'>
      <p className='text-black text-7xl col-span-full mb-5 blue-highlight'>
        Hi, my name is Karen.
      </p>
      <p className='text-blue-default  text-lg col-span-full'>
        I'm from the Inland Empire area of SoCal, but i ventured to
        Massachusetts to pursure a degree in Computer Science and Studio Art. I
        have a broad range of interests - coding, digital art, photography,
        education - overall, I have a love for learning{' '}
        <span role='img' aria-label='sparkle-heart'>
          💖
        </span>
        .
      </p>
    </div>
  );
};

export default Hero;
