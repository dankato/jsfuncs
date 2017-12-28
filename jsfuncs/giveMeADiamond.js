// Give me a Diamond

function diamond(n){
  if ( ! n || n < 3 || 0 === n % 2 ) {
    return null;
  }
  var diam = '';
  for ( var i = 1; i <= n; i += 2 ) {
    diam += generateLine( i, n );
    diam += '\n';
  }
  for ( var i = n - 2; i > 0; i -= 2 ) {
    diam += generateLine( i, n );
    diam += '\n';
  }
  return diam;
}
function generateLine( stars, length ) {
  if ( stars > length ) {
    return null;
  }
  var spaces = Math.floor( ( length - stars ) / 2 );
  var line = '';
  line += generateCharacters( ' ', spaces );
  line += generateCharacters( '*', stars );
  return line;
}
function generateCharacters( char, times ) {
  var str = '';
  for ( var i = 0; i < times; i++ ) {
    str += char;
  }
  return str;
}
console.log( '\n' + diamond( 3 ) );
console.log( '\n' + diamond( 5 ) );
