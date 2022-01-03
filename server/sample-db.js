const Product = require('./model/product')

class SampleDb {

    constructor() {
        this.products = [
            {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'ファフニール',
                attack: 8,
                hp: 10,
                heading1:'サンプルテキスト１',
                heading2:'サンプルテキスト２',
                heading3:'サンプルテキスト３',
                headingtext1:'サンプルテキスト１',
                headingtext2:'サンプルテキスト２',
                headingtext3:'サンプルテキスト３',
            },
            {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'アルベール',
                attack: 3,
                hp: 5,
                heading1:'サンプルテキスト１',
                heading2:'サンプルテキスト２',
                heading3:'サンプルテキスト３',
                headingtext1:'サンプルテキスト１',
                headingtext2:'サンプルテキスト２',
                headingtext3:'サンプルテキスト３',
            },
            {
                coverImage:'./assets/img/phone-cover.jpg',
                name: '未定',
                attack: 999,
                hp: 999,
                heading1:'サンプルテキスト１',
                heading2:'サンプルテキスト２',
                heading3:'サンプルテキスト３',
                headingtext1:'サンプルテキスト１',
                headingtext2:'サンプルテキスト２',
                headingtext3:'サンプルテキスト３',
            }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = SampleDb