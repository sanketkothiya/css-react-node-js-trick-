const dbConnect = require('./database')

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.update(
        {
            name
                :
                "Margherita"
        },
        {
            $set: { name: 'Margherita Cheezy ' }
        }
    )
    console.log(result)

}

updateData();