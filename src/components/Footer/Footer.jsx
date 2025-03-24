function Footer() {
  return (
    <footer className="flex justify-evenly items-center">
      <a href="https://github.com/arturoa925">
        <img
          src="/LinkedIn Icon.png"
          alt="My LinkedIn"
          className="w-[10vw] h-[10-vh] sm:w-[10vw] sm:h-[10-vh] md:w-[6vw] md:h-[6-vh] lg:w-[6vw] lg:h-[6-vh]"
        />
      </a>
      <a href="https://www.linkedin.com/in/arturo-ayala-775493187/">
        <img
          src="/Github Icon.png"
          alt="My GitHub"
          className="w-[10vw] h-[10-vh] sm:w-[10vw] sm:h-[10-vh] md:w-[6vw] md:h-[6-vh] lg:w-[6vw] lg:h-[6-vh]"
        />
      </a>
    </footer>
  );
}

export default Footer;
