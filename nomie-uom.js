/**
 * Nomie UOM is a js class for defining Nomie's Units of Measures
 * @class NomieUOM
 * @namespace NomieUOM
 */
var NomieUOM = function () {
  /**
   * @namespace pub
   * @memberof NomieUOM
   * @type {Object}
   */
  var pub = this;
  /**
   * @namespace private
   * @memberof NomieUOM
   * @private
   * @type {Object}
   */
  var pvt = {};

  /**
   * @name uoms
   * @memberof pub
   * @type {Object}
   */
	pub.uoms = {
		num: {
			singular: 'Count',
			plural: 'Count',
			symbol: 'count',
			type: 'general'
		},
    reps: {
			singular: 'Rep',
			plural: 'Reps',
			symbol: 'reps',
			type: 'general'
		},
		happys: {
			singular: 'Happy',
			plural: 'Happys',
			symbol: 'HPY',
			type: 'general'
		},
		dollars: {
			singular: 'Dollar',
			plural: 'Dollars',
			symbol: '$',
			type: 'general'
		},
		sec: {
			singular: 'Second',
			plural: 'Seconds',
			symbol: 'secs',
			type: 'time'
		},
		min: {
			singular: 'Minute',
			plural: 'Minutes',
			symbol: 'mins',
			type: 'time'
		},
		hour: {
			singular: 'Hour',
			plural: 'Hours',
			symbol: 'hrs',
			type: 'time'
		},
		day: {
			singular: 'Day',
			plural: 'Days',
			symbol: 'days',
			type: 'time'
		},
		mm: {
			singular: 'Millimeter',
			plural: 'Millimeters',
			symbol: 'mm',
			type: 'distance'
		},
		cm: {
			singular: 'Centimeter',
			plural: 'Centimeters',
			symbol: 'cm',
			type: 'distance'
		},
		meter: {
			singular: 'Meter',
			plural: 'Meter',
			symbol: 'm',
			type: 'distance'
		},
		km: {
			singular: 'Kilometer',
			plural: 'Kilometers',
			symbol: 'km',
			type: 'distance'
		},
		inch: {
			singular: 'Inch',
			plural: 'Inches',
			symbol: 'in',
			type: 'distance'
		},
    		celsius: {
			singular: 'Celsius',
			plural: 'Celsius',
			symbol: '°C',
			type: 'temperature'
		},
    		fahrenheit: {
			singular: 'Fahrenheit',
			plural: 'Fahrenheit',
			symbol: '°F',
			type: 'temperature'
		},
		foot: {
			singular: 'Foot',
			plural: 'Feet',
			symbol: 'ft',
			type: 'distance'
		},
		yard: {
			singular: 'Yard',
			plural: 'Yards',
			symbol: 'yrds',
			type: 'distance'
		},
		mile: {
			singular: 'Mile',
			plural: 'Miles',
			symbol: 'miles',
			type: 'distance'
		},
		mg: {
			singular: 'Milligram',
			plural: 'Milligrams',
			symbol: 'mg',
			type: 'weight'
		},
		gram: {
			singular: 'Gram',
			plural: 'Grams',
			symbol: 'g',
			type: 'weight'
		},
		kg: {
			singular: 'Kilogram',
			plural: 'Kilograms',
			symbol: 'kg',
			type: 'weight'
		},
		strone: {
			singular: 'Stone',
			plural: 'Stones',
			symbol: 'st',
			type: 'weight'
		},
		oz: {
			singular: 'Ounce',
			plural: 'Ounces',
			symbol: 'oz',
			type: 'weight'
		},
		pound: {
			singular: 'Pound',
			plural: 'Pounds',
			symbol: 'lbs',
			type: 'weight'
		},
		fluidounce: {
			singular: 'Fluid Ounce',
			plural: 'Fluid Ounces',
			symbol: 'fl oz',
			type: 'volume'
		},
		pint: {
			singular: 'Pint',
			plural: 'Pints',
			symbol: 'pint',
			type: 'volume'
		},
		quart: {
			singular: 'Quart',
			plural: 'Quarts',
			symbol: 'qt',
			type: 'volume'
		},
		gallon: {
			singular: 'Gallon',
			plural: 'Gallons',
			symbol: 'gal',
			type: 'volume'
		},
		liter: {
			singular: 'Liter',
			plural: 'Liters',
			symbol: 'L',
			type: 'volume'
		},
		milliliter: {
			singular: 'Milliliter',
			plural: 'Milliliters',
			symbol: 'ml',
			type: 'volume'
		}
	};
	pub.toArray = function () {
		var items = [];
		for (var uom in pub.uoms) {
			var item = pub.uoms[uom];
			item.uom = uom;
			items.push(item);
		}
		return items;
	};
	pub.toGroupedArray = function () {
		var items = {};
		for (var uom in pub.uoms) {
			var item = pub.uoms[uom];
			item.uom = uom;
			if (items.hasOwnProperty(item.type)) {
				items[item.type].push(item);
			}
			else {
				items[item.type] = [item];
			}
		}
		console.log("Grouped UOM Array", items);
		return items;
	};
	pub.plural = function (key) {
		return (pub.uoms.hasOwnProperty(key)) ? pub.uoms[key].plural : key;
	};
	pub.singular = function (key) {
		return (pub.uoms.hasOwnProperty(key)) ? pub.uoms[key].singular : key;
	};
	pub.abv = function (key) {
		return (pub.uoms.hasOwnProperty(key)) ? pub.uoms[key].symbol : null;
	};
	return pub;

};
