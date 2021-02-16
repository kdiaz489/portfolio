const Hero = () => {
  return (
    <section className='relative h-screen flex justify-center items-center py-16'>
      <div>
        <p className='text-black text-lg'>Hi, my name is</p>
        <p className='text-black font-bold text-5xl lg:text-7xl mb-5 '>
          <span className='blue-highlight'>Karen Diaz</span>
        </p>
        <p className='text-black lg:text-4xl text-lg mb-5 font-bold max-w-4xl'>
          <span>
            Bringing enrichment to users by solving problems with code, data and
            design.
          </span>
        </p>
        <p className='text-blue text-base lg:text-lg max-w-3xl'>
          I'm a Full Stack Dev based in Ontario, Ca. I have a broad range of
          interests - coding, visual art, photography, education - overall, I
          have a love for learning and problem solving{' '}
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
