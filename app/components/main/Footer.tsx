/** @format */

export default function Footer() {
  return (
    <div className="w-full md:w-7/12 pt-5 px-4 mb-8 mx-auto text-center mt-5">
      <div className="text-sm text-gray-100 py-1">
        This components requires
        <a
          href="https://www.material-tailwind.com/docs/html/navbar?ref=tailwindcomponents"
          className="text-gray-100 font-semibold"
          target="_blank"
        >
          Material Tailwind CSS & JS
        </a>
        for the shadows, ripple effects and card classes. <br />
        <br />A component by
        <a
          href="https://www.creative-tim.com?ref=tailwindcomponents"
          className="text-gray-100 font-semibold"
          target="_blank"
        >
          Creative Tim
        </a>
        .
      </div>
    </div>
  );
}
