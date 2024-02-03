import 'package:flutter/material.dart';

class MyBookScreen extends StatefulWidget {
  const MyBookScreen({super.key});

  @override
  State<MyBookScreen> createState() => _MyBookScreenState();
}

class _MyBookScreenState extends State<MyBookScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("My book"),
        actions: [
          IconButton(
            onPressed: () {},
            icon: Icon(Icons.add),
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            _booksLeftSideWidget(context),
            const SizedBox(width: 16,),
            _bookInfoRightSide(context),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Icon(Icons.add),
      ),
    );
  }

  Expanded _bookInfoRightSide(BuildContext context) {
    return Expanded(
              child: Card(
                child: Padding(
                  padding: const EdgeInsets.all(4),
                  child: Card(
                    child: Padding(
                      padding: const EdgeInsets.all(12.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text("Book name"),
                          Text("Book name"),
                          Text("Book name"),
                          Text("Book name"),
                          Text("Book name"),
                        ],
                      ),
                    ),
                  ),
                ),
              ));
  }

  Expanded _booksLeftSideWidget(BuildContext context) {
    return Expanded(
      flex: 2,
      child: Card(
        child: Padding(
          padding: const EdgeInsets.all(4),
          child: Card(
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: SizedBox(
                height: sizeHeight,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text("My book"),
                        Text("more..."),
                      ],
                    ),
                    const SizedBox(
                      height: 8,
                    ),
                    SizedBox(
                      width: sizeWidth,
                      height: sizeHeight / 4,
                      child: ListView.separated(
                        separatorBuilder: (_, __) => const SizedBox(
                          width: 8,
                        ),
                        itemBuilder: (ctx, index) => Card(
                          child: Column(
                            children: [
                              Expanded(
                                flex: 4,
                                child: Padding(
                                  padding: const EdgeInsets.all(8.0),
                                  child: Container(
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.only(topLeft: Radius.circular(12),topRight: Radius.circular(12)),
                                      color: Colors.red,
                                    ),
                                    width: 200,
                                  ),
                                ),
                              ),
                              Expanded(child: Center(child: Text('data')))
                            ],
                          ),
                        ),
                        scrollDirection: Axis.horizontal,
                        itemCount: 100,
                      ),
                    )
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  double get sizeWidth => MediaQuery.of(context).size.width;
  double get sizeHeight => MediaQuery.of(context).size.height;
}
