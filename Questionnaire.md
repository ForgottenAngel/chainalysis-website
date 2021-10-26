# Chainlysis Questionnaire

1. Are there any sub-optimal choices (or short cuts taken due to limited time) in your implementation?
    - The major sub-optimal choice is to have the recommendations fetch the price from the DOM rather 
      than the actual value as it is retrieved from the API. Optimally, the recommendations should be figured
      out the same time as the market data is fetched and updated along side the prices.  

2. Is any part of it over-designed? (It is fine to over-design to showcase your skills as long as you are clear about it)
    - I do not think any part of this is over-designed.

3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
    - The most important change that I would implement is having multiple backing servers containing some cache to hold the 
      pricing data. This is to prevent each user from having to making their own API calls to the exchanges and 
      instead the backing servers would be the only one making those API calls and caching the price data it retrieves.
      Then, the client would fetch the prices from the cache(s) helping to ensure availability. However, the polling rate
      may still need to be reduced to better handle the traffic, and if necessary possibly implementing a dynamic polling rate.

4. What are some other enhancements you would have made, if you had more time to do this implementation
    - Other than fixing the sub-optimal choice as described in the answer to Question 1, I had thoughts of implementing
      more than 2 exchanges to pull pricing data from. From there, there  would be a dropdown list for each of the two
      pricing tables that would allow you to select which exchange each table pulls pricing data from and thereby allowing
      the user to compare prices from multiple exchanges rather than simply 2. In addition, I would create a
      better UI as, while this one is functional, it does not work well with mobile devices and it isn't the most pleasant
      to look at.