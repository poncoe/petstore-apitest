const assert = require('chai').assert;
const app = require('../../assert')

// asserting, cara assert menggunakan chai
describe('hello coe', function() {
    it('aplikasi seharusnya mengembalikan pesan', function() {
        assert.equal(app(), "its work coe!")
    })
})