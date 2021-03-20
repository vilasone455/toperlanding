
import Header from '../components/header'

export default function IndexPage() {

  return (
    <>
      <div className="mybg">
        <div className="container mx-auto px-8 ">

          <main className="flex flex-col sm:flex-col jusitfy-between items-center py-12">
            <div className="items-center text-center">
              <h1 className="text-6xl text-white font-bold leading-none tracking-wide mb-2">Top Diagram</h1>
              <p className="text-2xl text-white text-secondary tracking-widest mb-4">The Simplest Way to Visualize Information
      Systems</p>

              <button href="#"
                className="m-4 bg-white hover:bg-purple-400 py-4 px-8 text-xl font-bold blacktext rounded">Start Draw Diagram</button>
            </div>
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:pl-12" >
              <img src="https://i.ibb.co/kGWTGYh/frame-safari-light.png" className="" />
            </div>
          </main>

        </div>
      </div>
      <div>
        <div className="container mx-auto px-8 ">
          <h4 className="uppercase text-4xl text-blue-900 font-bold leading-none tracking-wide mt-12 text-center">Why Top
          Diagram</h4>
          <hr className="mt-6 m-auto" />
          <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12 bg-white">
            <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">Fast</h1>
              <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">And Easy</h2>
              <p className="text-gray-600 leading-relaxed mb-12">Top Diagram Have Many Feature to Help you Create Diagram
              Easier
              Such : Context Menu , ShortCut , Quick Switch Between Model ...
            </p>
              <a href="#"
                className="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">Learn
              more</a>
            </div>
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
              <img src="https://i.ibb.co/kGWTGYh/frame-safari-light.png" />
            </div>
          </main>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-8 ">

          <hr className="mb-2 w-3/5 text-center" />
          <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12 bg-white">


            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5">
              <img src="https://i.ibb.co/kGWTGYh/frame-safari-light.png" />
            </div>

            <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">ReUse</h1>
              <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">Template</h2>
              <p className="text-gray-600 leading-relaxed mb-12">Dont Repleat Your Self My App have Feature to Create Template
              And Can
              Re use It Anytime
            </p>
              <a href="#"
                className="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">Learn
              more</a>
            </div>


          </main>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-8 ">

          <hr className="mb-2 w-3/5 text-center" />
          <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12 bg-white">
            <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">Support</h1>
              <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">Many Database</h2>
              <p className="text-gray-600 leading-relaxed mb-12">My App is not just Draw Diagram it is have feature to Export
              to Many Database , Even Export into Framework such : Laravel , Mongosse
            </p>
              <a href="#"
                className="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">Learn
              more</a>
            </div>
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
              <img src="https://i.ibb.co/kGWTGYh/frame-safari-light.png" />
            </div>
          </main>
        </div>
      </div>


      <div className="mybg p-8 border-b-2 border-gray-600">
      <div className="container mx-auto px-8 text-center">
        <h2 className="uppercase text-4xl text-white">Ready to get started?</h2>
        <h5 className="text-2xl text-white">Create a 🔥 diagram for your app database in less than 15 minutes.</h5>
        <button href="#"
                className="m-4 bg-white hover:bg-purple-400 py-4 px-8 text-xl font-bold blacktext rounded">Start Draw Diagram</button>
      </div>
      </div>

      <Header/>
     
    </>


  );
}

// My blog: https://www.ibrahima-ndaw.com/