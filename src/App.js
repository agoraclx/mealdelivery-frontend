// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        <div className="flex flex-col min-h-screen">
            <div className="">
              <div className="p-5 border-b border-gray-700 flex items-center justify-center">
                <a href="https://www.itsavirus.com" className="">
                    <img alt="itsavirus" src="https://www.itsavirus.com/static/media/logo.c870d00f.svg" />
                </a>
              </div>

              <div className="md:flex justify-center py-5">
                {/* <button className="component border rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-gray-100 ">
                  Popular Restaurant
                </button>
                <a href="https://google.com" className="block mx-5 hover:text-gray-500">Articles</a>
                <a href="https://google.com" className="block mx-5 hover:text-gray-500">Recommends</a>
                <a href="https://google.com" className="block mx-5 hover:text-gray-500">Subscriptions</a>
                <a href="https://google.com" className="block mx-5 hover:text-gray-500">Subscriptions</a>
                <a href="https://google.com" className="block mx-5 hover:text-gray-500">Subscriptions</a>
                <a href="https://google.com" className="block mx-5 hover:text-gray-500">Subscriptions</a> */}
                <div class="md:flex">
                  <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="time">
                    Time*
                    </label>
                    <div>
                      <select class="w-full text-black py-3 px-4 pr-8 mb-3" id="time">
                        <option>Abuja</option>
                        <option>Enugu</option>
                        <option>Lagos</option>
                      </select>
                    </div>
                  </div>
                  <div class="md:w-1/2 px-3">
                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="business-hours">
                      Business Hours*
                    </label>
                    <div>
                      <select class="w-full text-black py-3 px-4 pr-8 mb-3" id="business-hours">
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Internship</option>
                      </select>
                    </div>
                  </div>
                  <div class="md:w-1/2 px-3">
                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="dish">
                      Total dish*
                    </label>
                    <div>
                      <select class="w-full text-black py-3 px-4 pr-8 mb-3" id="dish">
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Customer Support</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>

              <div className="md:flex justify-center py-5">
                <button className="component border rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-gray-100 ">
                    List Popular Restaurant
                </button>
              </div>

              <div className="container mx-auto flex flex-wrap py-4 max-w-xl md:max-w-2xl flex-col sm:flex-row">
                <div className="px-4 sm:px-10 flex-1">
                    <input type="email" name="" id="" placeholder="search restaurant or menu" className="w-full px-4 py-3 border focus:border-brown-c99 focus:bg-white focus:outline-none" />
                </div>
              </div>
            </div>


            <div className="bg-white pt-12 pb-6 flex-1">
              <div className="container mx-auto flex flex-wrap -m-3">

                <div className="w-full md:w-1/2 flex flex-col p-3">
                  <div className="max-w-md md:max-w-2xl mx-auto md:mx-0 bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <img className="h-48 md:min-h-full md:max-h-full w-full md:w-36 lg:w-48 object-cover" src="https://source.unsplash.com/random/800x600&q=80" alt="Man looking at item at a store" />
                      </div>
                      <div className="p-8 text-left">
                        <p className="uppercase tracking-wide text-sm text-yellow-itsavirus font-semibold">Golden Burger</p>
                        <p className="mt-1 text-lg leading-tight font-medium text-black">Business Hours</p>
                        <p className="mt-2 text-xs">
                          Sun, Wed: 5:30 PM - 7 PM | Mon: 7:15 AM - 1 PM | Tue: 10:30 AM - 2 AM | Thur: 10:45 AM - 10:15 PM | Fri: 5:15 PM - 2:45 AM | Sat: 6:15 AM - 3:15 AM
                        </p>
                        <p className="mt-2 text-xs">
                          Sun, Wed: 5:30 PM - 7 PM <br/> Mon: 7:15 AM - 1 PM <br/> Tue: 10:30 AM - 2 AM <br/> Thur: 10:45 AM - 10:15 PM <br/> Fri: 5:15 PM - 2:45 AM <br/> Sat: 6:15 AM - 3:15 AM
                        </p>
                        <p className="mt-2 text-lg leading-tight font-medium text-black">Distance</p>
                        <p className="mt-2 text-xs">14 km</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col p-3">
                  <div className="max-w-md md:max-w-2xl mx-auto md:mx-0 bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <img className="h-48 md:min-h-full md:max-h-full w-full md:w-36 lg:w-48 object-cover" src="https://source.unsplash.com/random/800x600&q=80" alt="Man looking at item at a store" />
                      </div>
                      <div className="p-8 text-left">
                        <p className="uppercase tracking-wide text-sm text-yellow-itsavirus font-semibold">Golden Burger</p>
                        <p className="mt-1 text-lg leading-tight font-medium text-black">Business Hours</p>
                        <p className="mt-2 text-xs">
                          Sun, Wed: 5:30 PM - 7 PM | Mon: 7:15 AM - 1 PM | Tue: 10:30 AM - 2 AM | Thur: 10:45 AM - 10:15 PM | Fri: 5:15 PM - 2:45 AM | Sat: 6:15 AM - 3:15 AM</p>
                        <p className="mt-2 text-lg leading-tight font-medium text-black">Menu</p>
                        <p className="mt-2 text-xs"> Butter Pecan Ice Cream Cake with Glaze </p>
                        <p className="mt-2 text-lg leading-tight font-medium text-black">Distance</p>
                        <p className="mt-2 text-xs">14 km</p>
                      </div>
                    </div>
                  </div>
                </div>





                  
                  
                  {/* <div className="md:w-1/2 px-3 mb-6 w-full">
                    <div className="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden" style={{backgroundImage:`url(https://images.unsplash.com/photo-1513438205128-16af16280739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80)`}} >
                      <h2 className="text-white text-lg mb-2">Is The Herbal Way The Right Way</h2>
                      <p className="text-white opacity-50">Adwords Keyword Research For Beginners</p>
                      <div className="flex flex-wrap justify-between items-center mt-auto pt-6">
                        <div className="inline-flex items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img alt="test" src="https://randomuser.me/api/portraits/women/2.jpg" />
                          </div>
                          <div className="flex-1 pl-2">
                            <h2 className="text-white mb-1">Ollie McBride</h2>
                            <p className="text-white opacity-50 text-xs">May 18</p>
                          </div>
                        </div>
                        <span className="text-white opacity-50">
                        <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                          <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
                        </svg>
                      </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 px-3 mb-6 w-full">
                    <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                      <div className="w-2/6">
                        <img alt="test" className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" />
                      </div>
                      <div className="w-4/6 p-5">
                        <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
                        <div className="flex flex-wrap justify-between items-center mt-6">
                          <div className="inline-flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <img alt="test" src="https://randomuser.me/api/portraits/men/5.jpg" />
                            </div>
                            <div className="flex-1 pl-2">
                              <h2 className="text-white mb-1">Luke Nunez</h2>
                              <p className="text-white opacity-50 text-xs">May 18</p>
                            </div>
                          </div>
                          <span className="text-white opacity-50">
                        <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                          <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
                        </svg>
                      </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 px-3 mb-6 w-full">
                    <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                      <div className="w-2/6">
                        <img alt="test" className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
                      </div>
                      <div className="w-4/6 p-5">
                        <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
                        <div className="flex flex-wrap justify-between items-center mt-6">
                          <div className="inline-flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <img alt="test" src="https://randomuser.me/api/portraits/men/8.jpg" />
                            </div>
                            <div className="flex-1 pl-2">
                              <h2 className="text-white mb-1">Jonathan Mithu</h2>
                              <p className="text-white opacity-50 text-xs">May 18</p>
                            </div>
                          </div>
                          <span className="text-white opacity-50">
                        <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                          <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
                        </svg>
                      </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 px-3 mb-6 w-full">
                    <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                      <div className="w-2/6">
                        <img alt="test" className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
                      </div>
                      <div className="w-4/6 p-5">
                        <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
                        <div className="flex flex-wrap justify-between items-center mt-6">
                          <div className="inline-flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <img alt="test" src="https://randomuser.me/api/portraits/men/11.jpg" />
                            </div>
                            <div className="flex-1 pl-2">
                              <h2 className="text-white mb-1">Chris Sonne</h2>
                              <p className="text-white opacity-50 text-xs">May 18</p>
                            </div>
                          </div>
                          <span className="text-white opacity-50">
                        <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                          <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
                        </svg>
                      </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 px-3 mb-6 w-full">
                    <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                      <div className="w-2/6">
                        <img alt="test" className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU1MzA3fQ&auto=format&fit=crop&w=2250&q=80" />
                      </div>
                      <div className="w-4/6 p-5">
                        <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
                        <div className="flex flex-wrap justify-between items-center mt-6">
                          <div className="inline-flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <img alt="test" src="https://randomuser.me/api/portraits/men/33.jpg" />
                            </div>
                            <div className="flex-1 pl-2">
                              <h2 className="text-white mb-1">Mike Olle</h2>
                              <p className="text-white opacity-50 text-xs">May 18</p>
                            </div>
                          </div>
                          <span className="text-white opacity-50">
                        <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                          <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
                        </svg>
                      </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 px-3 mb-6 w-full"> 
                    <div className="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden" style={{backgroundImage:`url(https://images.unsplash.com/photo-1539623704225-548826dc5a08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)`}}>
                      <h2 className="text-white text-lg mb-2">Is The Herbal Way The Right Way</h2>
                      <p className="text-white opacity-50">Adwords Keyword Research For Beginners</p>
                      <div className="flex flex-wrap justify-between items-center mt-auto pt-6">
                        <div className="inline-flex items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img alt="test" src="https://randomuser.me/api/portraits/women/2.jpg" />
                          </div>
                          <div className="flex-1 pl-2">
                            <h2 className="text-white mb-1">Jack Roath</h2>
                            <p className="text-white opacity-50 text-xs">May 18</p>
                          </div>
                        </div>
                        <span className="text-white opacity-50">
                        <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                          <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
                        </svg>
                      </span>
                      </div>
                    </div>
                  </div>*/}





              </div>
            </div>
          </div>
    
    </div>
  );
}

export default App;
