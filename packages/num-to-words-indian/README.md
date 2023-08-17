# num-to-words

Library to convert whole numbers to english words in Indian System

Works upto lakhs

## How to use

### Install

`npm install @jstb/num-to-words-indian`

### Use in code

```javascript
import numberToWords from "@jstb/num-to-words-indian";

const amount = 10101;

const amountInWords = numberToWords(amount);
//Should return `ten thousand one hundred and one`
```
