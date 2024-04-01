const { getApriori } = require('./utils/apriori/index')
const Ruangan = require('./models/ruangan')
const Barang = require('./models/barang')

const apriori = async (support = 40, confidence = 40) => {
  // membuat dataset
  let dataset = []

  // mengambil data ruangan dari database
  const ruangan = await Ruangan.find()

  // melakukan perulangan ruangan untuk mengambil data barang berdasarkan ruangan
  for (let room of ruangan) {
    // membuat variabel untuk menampung data barang
    let roomItems = []

    // mengambil data barang berdasarkan nama ruangan
    const barang = await Barang.find({ room: room.name })

    // memasukan barang yang terdapat di dalam ruangan ke dalam variabel
    barang.forEach((item) => {
      roomItems.push(item.category)
    })

    // masukan data barang dan ruangan ke dalam dataset jika ruangan tidak kosong
    if (roomItems.length) dataset.push(roomItems.join(', '))
  }

  // melakukan perhitungan algoritma apriori berdasarkan dataset menggunakan libary simple-apriori
  return getApriori(dataset, support, confidence)
}

module.exports = apriori
