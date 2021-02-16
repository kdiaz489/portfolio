const Hero = () => {
  return (
    <section className='relative h-95vh flex justify-center items-center lg:py-0'>
      <div>
        <p className='text-black text-lg'>Hi, my name is</p>
        <p className='text-black font-bold text-xl lg:text-7xl mb-5 '>
          <span className='blue-highlight'>Karen Diaz</span>
        </p>
        <p className='text-black lg:text-3xl mb-5 font-bold max-w-4xl'>
          <span>
            Dedicated to bringing enrichment to users by solving problems with
            code, data and design.
          </span>
        </p>
        <p className='text-blue text-lg max-w-3xl'>
          I'm from the Inland Empire area of SoCal, but I ventured to
          Massachusetts to pursure a degree in Computer Science and Studio Art.
          I have a broad range of interests - coding, visual art, photography,
          education - overall, I have a love for learning{' '}
          <span role='img' aria-label='sparkle-heart'>
            💖
          </span>
          .
        </p>
      </div>
      {/* <div className='col-span-full lg:col-span-5 flex justify-center flex-1 lg:h-full'>
        <img src='/self.png' className='w-1/2 lg:w-3/4' alt='self' />
      </div> */}
    </section>
  );
};

export default Hero;
