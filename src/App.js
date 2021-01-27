import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import DayWeek from './data/days.json';

import PriceRange from './data/price.json';

function App() {
  // get 'data' key from api
  // const API_URL = 'https://limitless-plains-59505.herokuapp.com/api/restaurants?';
  const API_URL = 'http://localhost/mealdelivery-backend/public/api/restaurants?';
  const [restaurantData, setData] = useState({ data: [] });
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(API_URL);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(API_URL + `query=${query}`);
      setData(result.data);

      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  useEffect(() => {
    const fetchDataList = async () => {
      setIsLoading(true);

      const result = await axios(url);
      setData(result.data);
 
      setIsLoading(false);
    };
 
    fetchDataList();
  }, [url]);



  return (
    <Fragment>
      <div className="flex flex-col min-h-screen">
        {/* start header */}
        <div className="header">
          <div className="p-5 border-b border-gray-700 flex items-center justify-center">
            <a href="https://www.itsavirus.com" className="">
              <img alt="itsavirus" src="https://www.itsavirus.com/static/media/logo.c870d00f.svg" />
            </a>
          </div>

          <div className="container mx-auto md:flex py-4 px-4">
            <div className="block mx-auto md:w-full  md:flex justify-center">
              <div className=" w-full md:w-1/2 mb-4 md:mb-0 mr-0 md:mr-4 md:mx-auto border font-semibold tracking-wide text-sm focus:outline-none focus:shadow-outline border-yellow-itsavirus text-black hover:bg-yellow-itsavirus hover:text-black">
                <select className="w-full text-black py-3 px-4 pr-4" id="time">
                  <option>Open by days</option>

                  {
                    DayWeek.map(item => (
                      <option
                        key={item.id}
                        value={query}
                        onClick={event => setQuery(event.target.value)}
                      >
                        {item.name}
                      </option>
                    ))
                  }

                </select>
              </div>
              <div className=" w-full md:w-1/2 mb-4 md:mb-0 mr-0 md:mr-4 md:mx-auto border font-semibold tracking-wide text-sm focus:outline-none focus:shadow-outline border-yellow-itsavirus text-black hover:bg-yellow-itsavirus hover:text-black">
                <select className="w-full text-black py-3 px-4 pr-4" id="time">
                  <option>By Time</option>

                  {
                    DayWeek.map(item => (
                      <option
                        key={item.id}
                        value={item.id}
                        onChange={event => setQuery(event.target.value)}
                      >
                        {item.name}
                      </option>
                    ))
                  }

                </select>
              </div>
              <div className=" w-full md:w-1/2 mb-4 md:mb-0 mr-0 md:mr-4 md:mx-auto border font-semibold tracking-wide text-sm focus:outline-none focus:shadow-outline border-yellow-itsavirus text-black hover:bg-yellow-itsavirus hover:text-black">
                <select className="w-full text-black py-3 px-4 pr-4" id="time">
                  <option>Price range</option>
                  
                  {
                    PriceRange.map(item => (
                      <option
                        key={item.id}
                        value={item.id}
                        onChange={event => setQuery(event.target.value)}
                      >
                        {item.price}
                      </option>
                    ))
                  }

                </select>
              </div>
              <button
                type="button"
                value="popular"
                className="component w-full md:w-1/2 mb-6 md:mb-0 mr-0 md:mr-4 border font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-yellow-itsavirus text-black hover:bg-yellow-itsavirus hover:text-black "
                onClick={() => setUrl(API_URL + 'popular')}
              >
                Popular Restaurant
            </button>
              <button
                type="button"
                value="distance"
                className="component w-full md:w-1/2 mb-6 md:mb-0 mr-0 md:mr-4 border font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-yellow-itsavirus text-black hover:bg-yellow-itsavirus hover:text-black "
                onClick={() => setUrl(API_URL + 'distance')}
              >
                Restaurant by Distance
          </button>
            </div>
          </div>

          <div className="container mx-auto flex flex-wrap py-4 max-w-xl md:max-w-2xl flex-col sm:flex-row">
            <div className="px-4 sm:px-10 flex-1">
              <input
                type="text"
                className="w-full px-4 py-3 border focus:border-brown-c99 focus:bg-white focus:outline-none"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search restaurant name, menu, price, open hours..."
              />
            </div>
          </div>
        </div>
        {/* Ends header */}

        <div className="bg-white pt-12 pb-6 flex-1">
          <div className="container mx-auto flex flex-wrap -m-3">
            {
              isLoading ? (
                <div className="mx-auto w-full flex justify-center">Loading ...</div>
              ) : (
                  restaurantData.data.map(item => (
                    <div className="w-full md:w-1/2 flex flex-col p-3" key={item.id}>
                      <div className="max-w-md md:max-w-2xl mx-auto md:mx-0 bg-white rounded-xl shadow-md overflow-hidden mb-8">
                        <div className="md:flex">
                          <div className="md:flex-shrink-0">
                            <img className="h-48 md:min-h-full md:max-h-full w-full md:w-36 lg:w-48 object-cover" src="https://source.unsplash.com/random/800x600&q=80" alt="Man looking at item at a store" />
                          </div>
                          <div className="p-8 text-left">
                            <p className="uppercase tracking-wide text-sm text-yellow-itsavirus font-semibold">{item.name}</p>
                            <p className="mt-1 text-lg leading-tight font-medium text-black">Business Hours</p>
                            <p className="mt-2 text-xs">{item.business_hours}</p>
                            <p className="mt-2 text-lg leading-tight font-medium text-black">Distance</p>
                            <p className="mt-2 text-xs">{item.distance} km</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;