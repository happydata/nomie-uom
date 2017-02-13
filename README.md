# Nomie's Unit of Measurement module.
Units of Measure for Nomie

This is a simple JS Class for interacting with Nomie's UOM. Unit of Measurement (UOM) tell Nomie how to display data from a given tracker - for example Dollars, Centimeters, Celcius, etc. 

## Displaying a formated value. 

Let's say you have a value of ``55`` and a tracker with a uom of ``dollars``

### Set your base uom variable
```
var uom = new NomieUOM();
```

### Display a formated value 
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
