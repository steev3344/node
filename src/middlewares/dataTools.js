// filtering
exports.paginate = async function(page, limit, filter, sort, model) {
    try {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const results = {};
      results.meta = {};
      const total = await model.countDocuments().exec();
      results.meta.Total_Data_in_database = total;
      if (endIndex < total) {
        results.meta.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (startIndex > 0) {
        results.meta.previous = {
          page: page - 1,
          limit: limit,
        };
      } 
      if (filter) {
        samp = [filter];
        partial = { $and: samp };
      }
      if (!filter) partial = filter;
      // ***
      results.data = await model
        .find(partial)
        .sort(sort)
        .limit(limit)
        .skip(startIndex)
        .exec();
        results.status="success"
        const count = results.data.length;
        results.meta.data_found = count
      return results;
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };
