'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('get all bands: ',()=>{

	it('should get all bands', (done) => {
		chai.request(url)
			.get('/api/bandas')
			.end( function(err,res){
				console.log(res)
				expect(res).to.have.status(200);
				done();
			});
	});

});