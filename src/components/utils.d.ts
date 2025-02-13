/**
 * It takes a time in seconds and an offset in seconds and returns a new Date object with the timezone
 * offset applied
 * @param {number} time - the time in seconds since the epoch
 * @param {number} offset - The offset of the timezone you want to convert to.
 * @returns A Date object.
 */
export declare const convertTimeZone: (time: number, offset: number) => Date;
/**
 * It takes a UTC time and an offset and returns a date in the format of "Day, Day of Month Month"
 * @param {number} time - number - the time in milliseconds
 * @param {number} offset - -28800
 * @returns A string in the format of "Monday, 1 January"
 */
export declare const utcToDate: (time: number, offset: number) => string;
/**
 * It takes a UTC time and an offset and returns a formatted time
 * @param {number} time - number - the time in milliseconds
 * @param {number} offset - -28800
 * @returns A string in the format of "HH:MM am/pm"
 */
export declare const utcToTime: (time: number, offset: number) => string;
/**
 * It takes an array of strings and returns a string of comma separated values
 * @param {any[]} excludes - any[]
 * @returns A function that takes an array of any type and returns a string of the array elements
 * joined by a comma.
 */
export declare const excludeString: (excludes: any[]) => string;
/**
 * It takes an API key, latitude, longitude, units, and an array of strings that represent the data you
 * want to exclude from the response.
 *
 * It returns a promise that resolves to an object containing the weather data.
 *
 * The function uses the fetch API to make a request to the OpenWeatherMap API.
 *
 * @param {string} apiKey - string - Your OpenWeatherMap API key
 * @param {string} lat - string,
 * @param {string} lon - longitude
 * @param [units=metric] - metric, imperial, or standard
 * @param excludes - An array of strings that are the names of the data points you want to exclude from
 * the response.
 * @returns An object with the weather data.
 */
export declare const getWeather: (apiKey: string, lat: string, lon: string, units?: string, excludes?: string[], domain?: string) => Promise<any>;
