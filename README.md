# go-tabletennis
A toy project to help record events in table tennis games.

I time-boxed myself for this project to one evening, and there is still an infinite amount more work that could be done here. Among many other things, we could:
- Actually save the data to a database instead of storing everything in memory and losing it all when restarting the backend
- Add FE and BE tests
- Add the ability to edit events (while I didn't get time to implement it, I'm confident that the system design lends itself to being able to easily build an API around editing events since each event has its own identifier - it'd simply be a matter of building a UI around it).
- Actually spend some time on the design
- A myriad of UX problems
- A login / signup system
- Logging requests
- Current implementation serializes the models straight to the view. Obviously this is awful design and we should be converting things to DTOs instead.

Ultimately, while it's still very bare-bones I'm pretty happy with what I achieved in one evening.

## Backend
- Visual Studio 2019
- .NET Core 3.1
- Server opens on localhost:44319

## Front end
- yarn install
- yarn start
- Server opens on localhost:3000
