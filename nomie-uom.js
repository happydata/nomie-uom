/**
 * Nomie UOM is a js class for defining Nomie's Units of Measures
 * @class NomieUOM
 * @namespace NomieUOM
 */
var NomieUOM = function() {
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
			symbol: ':)',
			type: 'general'
		},
		dollars: {
			singular: 'Dollar',
			plural: 'Dollars',
			symbol: '$',
			type: 'currency',
			symbolAffix: 'pre'
		},
		peso: {
			singular: 'Peso',
			plural: 'Peso',
			symbol: '$',
			type: 'currency',
			symbolAffix: 'pre'
		},
		cpound: {
			singular: 'Pound',
			plural: 'Pounds',
			symbol: '£',
			type: 'currency',
			symbolAffix: 'pre'
		},
		yen: {
			singular: 'Yen',
			plural: 'Yen',
			symbol: '¥',
			type: 'currency',
			symbolAffix: 'pre'
		},
		euro: {
			singular: 'Euro',
			plural: 'Euros',
			symbol: '€',
			type: 'currency',
			symbolAffix: 'pre'
		},
		sec: {
			singular: 'Second',
			plural: 'Seconds',
			symbol: 'secs',
			type: 'time',
			symbolAffix: 'post',
			symbolSpace: true
		},
		min: {
			singular: 'Minute',
			plural: 'Minutes',
			symbol: 'mins',
			type: 'time',
			symbolAffix: 'post',
			symbolSpace: true
		},
		hour: {
			singular: 'Hour',
			plural: 'Hours',
			symbol: 'hrs',
			type: 'time',
			symbolAffix: 'post',
			symbolSpace: true
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
			type: 'distance',
			symbolAffix: 'post',
			symbolSpace: true
		},
		meter: {
			singular: 'Meter',
			plural: 'Meter',
			symbol: 'm',
			type: 'distance',
			symbolAffix: 'post',
			symbolSpace: true
		},
		km: {
			singular: 'Kilometer',
			plural: 'Kilometers',
			symbol: 'km',
			type: 'distance',
			symbolAffix: 'post',
			symbolSpace: true
		},
		inch: {
			singular: 'Inch',
			plural: 'Inches',
			symbol: 'in',
			type: 'distance',
			symbolAffix: 'post',
			symbolSpace: true
		},
		celsius: {
			singular: 'Celsius',
			plural: 'Celsius',
			symbol: '°C',
			type: 'temperature',
			symbolAffix: 'post',
			symbolSpace: false
		},
		fahrenheit: {
			singular: 'Fahrenheit',
			plural: 'Fahrenheit',
			symbol: '°F',
			type: 'temperature',
			symbolAffix: 'post',
			symbolSpace: false
		},
		foot: {
			singular: 'Foot',
			plural: 'Feet',
			symbol: 'ft',
			type: 'distance',
			symbolAffix: 'post',
			symbolSpace: true
		},
		yard: {
			singular: 'Yard',
			plural: 'Yards',
			symbol: 'yrds',
			type: 'distance',
			symbolAffix: 'post',
			symbolSpace: true
		},
		mile: {
			singular: 'Mile',
			plural: 'Miles',
			symbol: 'mi',
			type: 'distance',
			symbolAffix: 'post'
		},
		mg: {
			singular: 'Milligram',
			plural: 'Milligrams',
			symbol: 'mg',
			type: 'weight',
			symbolAffix: 'post'
		},
		gram: {
			singular: 'Gram',
			plural: 'Grams',
			symbol: 'g',
			type: 'weight',
			symbolAffix: 'post'
		},
		kg: {
			singular: 'Kilogram',
			plural: 'Kilograms',
			symbol: 'kg',
			type: 'weight',
			symbolAffix: 'post'
		},
		strone: {
			singular: 'Stone',
			plural: 'Stones',
			symbol: 'st',
			type: 'weight'
		},
		stone: {
			singular: 'Stone',
			plural: 'Stones',
			symbol: 'st',
			type: 'weight'
		},
		oz: {
			singular: 'Ounce',
			plural: 'Ounces',
			symbol: 'oz',
			type: 'weight',
			symbolAffix: 'post',
			symbolSpace: true
		},
		pound: {
			singular: 'Pound',
			plural: 'Pounds',
			symbol: 'lbs',
			type: 'weight',
			symbolAffix: 'post',
			symbolSpace: true
		},
		cup: {
			singular: 'Cup',
			plural: 'Cups',
			symbol: 'cups',
			type: 'volume',
			symbolAffix: 'post',
			symbolSpace: true
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
			type: 'volume',
			symbolAffix: 'post'
		},
		gallon: {
			singular: 'Gallon',
			plural: 'Gallons',
			symbol: 'gal',
			type: 'volume',
			symbolAffix: 'post',
			symbolSpace: true
		},
		liter: {
			singular: 'Liter',
			plural: 'Liters',
			symbol: 'L',
			type: 'volume',
			symbolAffix: 'post',
			symbolSpace: false
		},
		milliliter: {
			singular: 'Milliliter',
			plural: 'Milliliters',
			symbol: 'ml',
			type: 'volume',
			symbolAffix: 'post',
			symbolSpace: false
		}
	};
	pub.toArray = function() {
		var items = [];
		for (var uom in pub.uoms) {
			var item = pub.uoms[uom];
			item.uom = uom;
			uom.symbolAffix = uom.symbolAffix || null;
			items.push(item);
		}
		return items;
	};
	pub.toGroupedArray = function() {
		var items = {};
		for (var uom in pub.uoms) {
			var item = pub.uoms[uom];
			item.uom = uom;
			if (items.hasOwnProperty(item.type)) {
				items[item.type].push(item);
			} else {
				items[item.type] = [item];
			}
		}
		return items;
	};
	pub.plural = function(key) {
		return (pub.uoms.hasOwnProperty(key)) ? pub.uoms[key].plural : key;
	};
	pub.singular = function(key) {
		return (pub.uoms.hasOwnProperty(key)) ? pub.uoms[key].singular : key;
	};
	pub.abv = function(key) {
		return (pub.uoms.hasOwnProperty(key)) ? pub.uoms[key].symbol : null;
	};
	pub.displayValue = function(key, value) {
		if(!isNaN(value)) {
			value = value.toLocaleString();
		}
		if (pub.uoms.hasOwnProperty(key)) {
			var symbol = pub.uoms[key].symbol || null;
			var affix = pub.uoms[key].symbolAffix || null;
			var space = (pub.uoms[key].symbolSpace || false) ? ' ' : '';

			if (affix && symbol && value) {

				if (affix == 'pre') {
					return symbol + space + value;
				} else {
					return value + space + symbol;
				}
			} else {
				return value;
			}
		} else {
			return value;
		}
	}
	return pub;

};
