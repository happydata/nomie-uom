# Nomie's Unit of Measurement module.

This is a simple JS Class for interacting with Nomie's UOM. Unit of Measurement (UOM) tell Nomie how to display data from a given tracker

## Currently available

Count,Reps,Happys,Dollars,Peso,Francs,Pounds,Rupees,Yen,Euros,Time,Seconds,Minutes,Hours,Days,Millimeters,Centimeters,Meter,Kilometers,Inches,Celsius,Fahrenheit,Feet,Yards,Miles,Milligrams,Grams,Kilograms,Stones,Stones,Ounces,Pounds,Cups,Fluid Ounces,Pints,Quarts,Gallons,Liters,Milliliters


### Set your base uom variable
```
var uom = new NomieUOM();
```

### Display a formatted value 

Let's say you have a value of ``55`` and a tracker with a uom of ``dollars``
```
uom.displayValue('dollars', 55); // returns $55.00
```
### Get Plural Label of UOM
```
uom.plural('dollars'); // returns Dollars
```

### Get Singular Label of UOM
```
uom.singular('dollars'); // returns Dollar
```

### Get Symbol / Abv of UOM
```
uom.abv('dollars'); // returns $
```
