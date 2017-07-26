declare namespace nomieUOM {
	function toArray(): Array<any>;
	function toGroupedArray(): Array<any>;
	function plural(key:String): String;
	function singular(key:String): String;
	function abv(key:String): String;
	function addCommas(num:Number): String;
	function displayValue(uom:any, value:Number);
	export var uoms: any;
}
export = nomieUOM;
