import {db} from '../../../utils/db'

export default async (req, res) => {
  console.log("call fetch")
  try {

    const entries = await db.collection('posts').get();
    
    const entriesData = entries.docs.map(entry => entry.data());
    res.status(200).json(entriesData);
    
  } catch (e) {
    console.log("have error ")
    console.log(e)
    res.status(400).end();
  }
}