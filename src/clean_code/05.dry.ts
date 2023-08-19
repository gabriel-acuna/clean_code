type Size = '' | 'S' | 'M' | 'L'
class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = ''
    ) { }
    isAValidProduct(): boolean {
        let isVaild = true
        for (const propertyName in this) {
            switch (typeof this[propertyName]) {
                case 'string':
                    if ((<string><unknown>this[propertyName]).length <= 0)
                        throw new Error(`${propertyName} is empty`)
                    break;
                case 'number':
                    if (<number>(this[propertyName]) <= 0)
                        throw new Error(`${propertyName} is zero`)
                    break;
                default:
                    throw Error(`Product has not a ${typeof this[propertyName]} property called ${propertyName}`)
            }
        }
        return isVaild;
    }
    toString() {
        if (!this.isAValidProduct()) return
        return `${this.name} ($${this.price}), ${this.size}`
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 30, 'L');
    console.log(bluePants.toString())
})()