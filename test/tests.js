var assert = chai.assert;

suite('CSV', function() {

   test('Creacion de tabla correcta (numeros)', function () {
        original.value = '1,2,3\n4,5,6';
        calculate();
        var valueExpected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>1</td>                                  <td>2</td>                                  <td>3</td>              </tr>\n<tr>                    <td>4</td>                                  <td>5</td>                                  <td>6</td>              </tr>\n</tbody></table>';
        assert.deepEqual(finaltable.innerHTML, valueExpected);
    });
	
	test('Creacion de tabla correcta (numeros con decimales)',function(){
		original.value = '1.5,3.14,67';
		calculate();
		var valueExpected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>1.5</td>                                  <td>3.14</td>                                  <td>67</td>              </tr>\n</tbody></table>';
		assert.deepEqual(finaltable.innerHTML, valueExpected);
	});
	
	test('Creacion de tabla correcta (palabras)',function(){
		original.value = 'superman,kriptonita\ngodzilla,radiacion';
		calculate();
		var valueExpected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>superman</td>                                  <td>kriptonita</td>              </tr>\n<tr>                    <td>godzilla</td>                                  <td>radiacion</td>              </tr>\n</tbody></table>';
		assert.deepEqual(finaltable.innerHTML, valueExpected);
	});
	
	test('Prueba 3: Error provocado', function() {
        original.value = "Creando, un, error,\n debido, a, longitud, equivocada";
        calculate();
        assert.deepEqual(finaltable.innerHTML, '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>Creando</td>                                  <td> un</td>                                  <td> error</td>              </tr>\n<tr class="error">                    <td>debido</td>                                  <td> a</td>                                  <td> longitud</td>                                  <td> equivocada</td>              </tr>\n</tbody></table>');
	});
});