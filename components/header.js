import Link from "next/link"


export default function Header() {


  return (
    <div className="mybg">
    <div className="container mx-auto px-8 ">
                <header
          className="flex flex-col sm:flex-row items-center justify-between py-6 relative border-top-4 border-blue-500">
          <h3 className="text-2xl font-bold uppercase text-white">Logo</h3>
          <nav className="hidden md:flex text-lg">

            <Link href="/Features"  >
              <a className="text-white hover:text-purple-300 py-3 px-6">
              Features
              </a></Link>
            <Link href="/Features">
            <a  className="text-white hover:text-purple-300 py-3 px-6">Contact</a>
            </Link>
            <Link href="/Posts">
            <a  className="text-white hover:text-purple-300 py-3 px-6">What new</a>
            </Link>
            
            <a href="#" className="text-white hover:text-purple-300 py-3 px-6">FAQ</a>
            <a href="#" className="bg-purple-200 hover:bg-purple-300 rounded-full uppercase text-purple-700 py-3 px-6">Sign
              Up</a>
          </nav>
          <button className="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5">
                  <span className="w-5 h-px mb-1 bg-orange-500"></span>
                  <span className="w-5 h-px mb-1 bg-orange-500"></span>
                  <span className="w-5 h-px mb-1 bg-orange-500"></span>
              </button>
        </header>
      </div>
    </div>

  );
}