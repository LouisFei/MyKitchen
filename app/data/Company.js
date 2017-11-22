Ext.define('MyKitchen.data.Company', {
    requires: [
        'MyKitchen.data.Init'
    ]
}, function () {
    var companies = [
        {
            "id": 1,
            "name": "Roodel",
            "phone": "602-736-2835",
            "price": 59.47,
            "priceChange": 1.23,
            "priceLastChange": "10/8",
            "industry": "Manufacturing",
            "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
            "priceChangePct": 2.11
        },
        {
            "id": 2,
            "name": "Voomm",
            "phone": "662-254-4213",
            "price": 41.31,
            "priceChange": 2.64,
            "priceLastChange": "10/18",
            "industry": "Services",
            "desc": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            "priceChangePct": 6.83
        },
        {
            "id": 3,
            "name": "Dabvine",
            "phone": "745-225-8364",
            "price": 29.94,
            "priceChange": 3.55,
            "priceLastChange": "10/11",
            "industry": "Finance",
            "desc": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
            "priceChangePct": 13.45
        },
        {
            "id": 4,
            "name": "Twitterbeat",
            "phone": "862-540-4332",
            "price": 89.96,
            "priceChange": -3.82,
            "priceLastChange": "10/2",
            "industry": "Computer",
            "desc": "Sed ante. Vivam--us tortor. Duis mattis egestas metus.",
            "priceChangePct": -4.07
        },
        {
            "id": 5,
            "name": "Lajo",
            "phone": "351-170-1070",
            "price": 65.51,
            "priceChange": 1.48,
            "priceLastChange": "10/14",
            "industry": "Manufacturing",
            "desc": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
            "priceChangePct": 2.31
        },
        {
            "id": 6,
            "name": "Livetube",
            "phone": "745-259-7013",
            "price": 52.34,
            "priceChange": 0.91,
            "priceLastChange": "10/3",
            "industry": "Automotive",
            "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "priceChangePct": 1.77
        },
        {
            "id": 7,
            "name": "Flipstorm",
            "phone": "255-457-6789",
            "price": 41.81,
            "priceChange": -1.58,
            "priceLastChange": "10/9",
            "industry": "Retail",
            "desc": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
            "priceChangePct": -3.64
        },
        {
            "id": 8,
            "name": "Oloo",
            "phone": "862-723-7988",
            "price": 53.27,
            "priceChange": 2.06,
            "priceLastChange": "10/14",
            "industry": "Finance",
            "desc": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "priceChangePct": 4.02
        },
        {
            "id": 9,
            "name": "Roombo",
            "phone": "622-156-8067",
            "price": 21.53,
            "priceChange": -4.04,
            "priceLastChange": "10/13",
            "industry": "Services",
            "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "priceChangePct": -15.8
        },
        {
            "id": 10,
            "name": "Ntags",
            "phone": "482-558-5069",
            "price": 34.31,
            "priceChange": 2.94,
            "priceLastChange": "10/14",
            "industry": "Food",
            "desc": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "priceChangePct": 9.37
        },
        {
            "id": 11,
            "name": "Shuffletag",
            "phone": "145-574-5042",
            "price": 25.92,
            "priceChange": 0.77,
            "priceLastChange": "10/2",
            "industry": "Food",
            "desc": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "priceChangePct": 3.06
        },
        {
            "id": 12,
            "name": "Skivee",
            "phone": "812-555-0295",
            "price": 50.61,
            "priceChange": -3.11,
            "priceLastChange": "10/4",
            "industry": "Manufacturing",
            "desc": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "priceChangePct": -5.79
        },
        {
            "id": 13,
            "name": "Tanoodle",
            "phone": "221-841-0818",
            "price": 64.26,
            "priceChange": -2.91,
            "priceLastChange": "10/1",
            "industry": "Finance",
            "desc": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "priceChangePct": -4.33
        },
        {
            "id": 14,
            "name": "Buzzster",
            "phone": "542-221-3452",
            "price": 37.16,
            "priceChange": -1.09,
            "priceLastChange": "10/14",
            "industry": "Computer",
            "desc": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "priceChangePct": -2.85
        },
        {
            "id": 15,
            "name": "Topicblab",
            "phone": "632-732-0112",
            "price": 80.68,
            "priceChange": -3.68,
            "priceLastChange": "10/12",
            "industry": "Food",
            "desc": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "priceChangePct": -4.36
        },
        {
            "id": 16,
            "name": "Thoughtworks",
            "phone": "622-654-8350",
            "price": 64.59,
            "priceChange": -2.68,
            "priceLastChange": "10/16",
            "industry": "Manufacturing",
            "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "priceChangePct": -3.98
        },
        {
            "id": 17,
            "name": "Feedfire",
            "phone": "622-744-0512",
            "price": 21.51,
            "priceChange": -3.72,
            "priceLastChange": "10/12",
            "industry": "Food",
            "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
            "priceChangePct": -14.74
        },
        {
            "id": 18,
            "name": "Thoughtstorm",
            "phone": "622-479-3734",
            "price": 80.48,
            "priceChange": -2.77,
            "priceLastChange": "10/18",
            "industry": "Automotive",
            "desc": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            "priceChangePct": -3.33
        },
        {
            "id": 19,
            "name": "Agivu",
            "phone": "358-757-5355",
            "price": 74.05,
            "priceChange": 0.14,
            "priceLastChange": "10/4",
            "industry": "Manufacturing",
            "desc": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "priceChangePct": 0.19
        },
        {
            "id": 20,
            "name": "Babbleblab",
            "phone": "504-149-8727",
            "price": 37.24,
            "priceChange": -0.43,
            "priceLastChange": "10/18",
            "industry": "Manufacturing",
            "desc": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "priceChangePct": -1.14
        },
        {
            "id": 21,
            "name": "Thoughtstorm",
            "phone": "632-278-4707",
            "price": 71.75,
            "priceChange": -0.83,
            "priceLastChange": "10/2",
            "industry": "Computer",
            "desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
            "priceChangePct": -1.14
        },
        {
            "id": 22,
            "name": "Skalith",
            "phone": "145-310-2923",
            "price": 52.57,
            "priceChange": 3.79,
            "priceLastChange": "10/17",
            "industry": "Food",
            "desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "priceChangePct": 7.77
        },
        {
            "id": 23,
            "name": "Vipe",
            "phone": "622-869-7830",
            "price": 67.77,
            "priceChange": 1.18,
            "priceLastChange": "10/1",
            "industry": "Manufacturing",
            "desc": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "priceChangePct": 1.77
        },
        {
            "id": 24,
            "name": "Bubblemix",
            "phone": "522-374-1131",
            "price": 61.24,
            "priceChange": -3.11,
            "priceLastChange": "10/15",
            "industry": "Automotive",
            "desc": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "priceChangePct": -4.83
        },
        {
            "id": 25,
            "name": "Kamba",
            "phone": "351-332-9983",
            "price": 37.2,
            "priceChange": -2.96,
            "priceLastChange": "10/10",
            "industry": "Manufacturing",
            "desc": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
            "priceChangePct": -7.37
        },
        {
            "id": 26,
            "name": "Zoombox",
            "phone": "622-496-8296",
            "price": 21.13,
            "priceChange": -3.47,
            "priceLastChange": "10/1",
            "industry": "Finance",
            "desc": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "priceChangePct": -14.11
        }, 
        {
            "id": 27,
            "name": "Roomm",
            "phone": "145-321-7713",
            "price": 25.09,
            "priceChange": -2.25,
            "priceLastChange": "10/18",
            "industry": "Services",
            "desc": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "priceChangePct": -8.23
        }, 
        {
            "id": 28,
            "name": "Yacero",
            "phone": "970-809-4952",
            "price": 38.35,
            "priceChange": 4.5,
            "priceLastChange": "10/12",
            "industry": "Medical",
            "desc": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
            "priceChangePct": 13.29
        }, 
        {
            "id": 29,
            "name": "Oyoloo",
            "phone": "862-906-7336",
            "price": 64.89,
            "priceChange": -1.73,
            "priceLastChange": "10/18",
            "industry": "Manufacturing",
            "desc": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "priceChangePct": -2.6
        }, 
        {
            "id": 30,
            "name": "Blogpad",
            "phone": "622-375-1023",
            "price": 64.2,
            "priceChange": 0.14,
            "priceLastChange": "10/1",
            "industry": "Medical",
            "desc": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            "priceChangePct": 0.22
        }, 
        {
            "id": 31,
            "name": "Lajo",
            "phone": "392-365-1092",
            "price": 84.82,
            "priceChange": -2.05,
            "priceLastChange": "10/16",
            "industry": "Retail",
            "desc": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "priceChangePct": -2.36
        }, 
        {
            "id": 32,
            "name": "Zoombox",
            "phone": "599-642-7887",
            "price": 51.51,
            "priceChange": 4.44,
            "priceLastChange": "10/12",
            "industry": "Automotive",
            "desc": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "priceChangePct": 9.43
        }, 
        {
            "id": 33,
            "name": "Voolith",
            "phone": "622-474-4785",
            "price": 62.93,
            "priceChange": 0.59,
            "priceLastChange": "10/1",
            "industry": "Food",
            "desc": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
            "priceChangePct": 0.95
        }, 
        {
            "id": 34,
            "name": "Kwinu",
            "phone": "357-354-0150",
            "price": 48.11,
            "priceChange": -2.66,
            "priceLastChange": "10/7",
            "industry": "Retail",
            "desc": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "priceChangePct": -5.24
        }, 
        {
            "id": 35,
            "name": "Livefish",
            "phone": "862-232-8537",
            "price": 21.23,
            "priceChange": -0.72,
            "priceLastChange": "10/11",
            "industry": "Services",
            "desc": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "priceChangePct": -3.28
        }, 
        {
            "id": 36,
            "name": "Kwinu",
            "phone": "745-275-6224",
            "price": 68.76,
            "priceChange": 3.56,
            "priceLastChange": "10/16",
            "industry": "Services",
            "desc": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "priceChangePct": 5.46
        }, 
        {
            "id": 37,
            "name": "Miboo",
            "phone": "982-619-7532",
            "price": 46.6,
            "priceChange": 3.45,
            "priceLastChange": "10/18",
            "industry": "Automotive",
            "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
            "priceChangePct": 8
        }, 
        {
            "id": 38,
            "name": "Kwilith",
            "phone": "351-595-8792",
            "price": 58.14,
            "priceChange": 0.14,
            "priceLastChange": "10/7",
            "industry": "Retail",
            "desc": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "priceChangePct": 0.24
        }, 
        {
            "id": 39,
            "name": "Photolist",
            "phone": "622-519-3547",
            "price": 56.49,
            "priceChange": -4.73,
            "priceLastChange": "10/3",
            "industry": "Finance",
            "desc": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "priceChangePct": -7.73
        }, 
        {
            "id": 40,
            "name": "Miboo",
            "phone": "380-372-8082",
            "price": 77.71,
            "priceChange": -3.93,
            "priceLastChange": "10/9",
            "industry": "Medical",
            "desc": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "priceChangePct": -4.81
        }, 
        {
            "id": 41,
            "name": "Browsedrive",
            "phone": "462-687-7028",
            "price": 49.9,
            "priceChange": -1.72,
            "priceLastChange": "10/2",
            "industry": "Computer",
            "desc": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "priceChangePct": -3.33
        }, 
        {
            "id": 42,
            "name": "Riffpedia",
            "phone": "356-106-1367",
            "price": 45.9,
            "priceChange": 0.11,
            "priceLastChange": "10/12",
            "industry": "Services",
            "desc": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "priceChangePct": 0.24
        }, {
            "id": 43,
            "name": "Oozz",
            "phone": "862-353-0334",
            "price": 87.35,
            "priceChange": 4.48,
            "priceLastChange": "10/6",
            "industry": "Computer",
            "desc": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            "priceChangePct": 5.41
        }, {
            "id": 44,
            "name": "Shuffledrive",
            "phone": "862-563-6500",
            "price": 88.31,
            "priceChange": 2.06,
            "priceLastChange": "10/11",
            "industry": "Automotive",
            "desc": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "priceChangePct": 2.39
        }, {
            "id": 45,
            "name": "Yakitri",
            "phone": "552-429-1428",
            "price": 69.33,
            "priceChange": 2.72,
            "priceLastChange": "10/6",
            "industry": "Computer",
            "desc": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            "priceChangePct": 4.08
        }, {
            "id": 46,
            "name": "Linkbuzz",
            "phone": "462-377-7472",
            "price": 70.51,
            "priceChange": 0.07,
            "priceLastChange": "10/18",
            "industry": "Computer",
            "desc": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "priceChangePct": 0.1
        }, {
            "id": 47,
            "name": "Wordpedia",
            "phone": "267-704-2054",
            "price": 26.92,
            "priceChange": -4.43,
            "priceLastChange": "10/13",
            "industry": "Medical",
            "desc": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            "priceChangePct": -14.13
        }, {
            "id": 48,
            "name": "Yabox",
            "phone": "745-780-8768",
            "price": 76.81,
            "priceChange": 2.59,
            "priceLastChange": "10/10",
            "industry": "Automotive",
            "desc": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            "priceChangePct": 3.49
        }, {
            "id": 49,
            "name": "Dynabox",
            "phone": "862-898-8042",
            "price": 64.65,
            "priceChange": -2.11,
            "priceLastChange": "10/6",
            "industry": "Manufacturing",
            "desc": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "priceChangePct": -3.16
        }, {
            "id": 50,
            "name": "Topicstorm",
            "phone": "482-108-7665",
            "price": 87.72,
            "priceChange": 4.28,
            "priceLastChange": "10/4",
            "industry": "Retail",
            "desc": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "priceChangePct": 5.13
        }, {
            "id": 51,
            "name": "Realpoint",
            "phone": "842-806-2602",
            "price": 82.67,
            "priceChange": 2.54,
            "priceLastChange": "10/10",
            "industry": "Services",
            "desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "priceChangePct": 3.17
        }, {
            "id": 52,
            "name": "Vimbo",
            "phone": "745-182-0490",
            "price": 56.51,
            "priceChange": -0.43,
            "priceLastChange": "10/16",
            "industry": "Computer",
            "desc": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "priceChangePct": -0.76
        }, {
            "id": 53,
            "name": "Babbleset",
            "phone": "632-908-4430",
            "price": 24.72,
            "priceChange": -1.85,
            "priceLastChange": "10/11",
            "industry": "Computer",
            "desc": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "priceChangePct": -6.96
        }, {
            "id": 54,
            "name": "Myworks",
            "phone": "862-462-8001",
            "price": 59.48,
            "priceChange": -1.99,
            "priceLastChange": "10/9",
            "industry": "Manufacturing",
            "desc": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
            "priceChangePct": -3.24
        }, {
            "id": 55,
            "name": "Kazio",
            "phone": "380-980-3093",
            "price": 75.84,
            "priceChange": 4.58,
            "priceLastChange": "10/6",
            "industry": "Services",
            "desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "priceChangePct": 6.43
        }, {
            "id": 56,
            "name": "Linkbridge",
            "phone": "512-129-3871",
            "price": 60.95,
            "priceChange": 2.28,
            "priceLastChange": "10/15",
            "industry": "Services",
            "desc": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "priceChangePct": 3.89
        }, {
            "id": 57,
            "name": "Quinu",
            "phone": "503-662-9741",
            "price": 55,
            "priceChange": 2.7,
            "priceLastChange": "10/12",
            "industry": "Computer",
            "desc": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
            "priceChangePct": 5.16
        }, {
            "id": 58,
            "name": "Wikivu",
            "phone": "462-209-9969",
            "price": 57.09,
            "priceChange": -4.92,
            "priceLastChange": "10/18",
            "industry": "Food",
            "desc": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "priceChangePct": -7.93
        }, {
            "id": 59,
            "name": "Yata",
            "phone": "622-394-7257",
            "price": 29.53,
            "priceChange": -2.92,
            "priceLastChange": "10/17",
            "industry": "Manufacturing",
            "desc": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "priceChangePct": -9
        }, {
            "id": 60,
            "name": "Feedfish",
            "phone": "745-750-2429",
            "price": 62.17,
            "priceChange": 0.94,
            "priceLastChange": "10/3",
            "industry": "Retail",
            "desc": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
            "priceChangePct": 1.54
        }, {
            "id": 61,
            "name": "Trudoo",
            "phone": "357-282-4066",
            "price": 56.56,
            "priceChange": 0.4,
            "priceLastChange": "10/15",
            "industry": "Finance",
            "desc": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "priceChangePct": 0.71
        }, {
            "id": 62,
            "name": "Kazio",
            "phone": "552-561-3265",
            "price": 22.92,
            "priceChange": 0.17,
            "priceLastChange": "10/6",
            "industry": "Medical",
            "desc": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "priceChangePct": 0.75
        }, {
            "id": 63,
            "name": "Quamba",
            "phone": "862-243-2456",
            "price": 26.54,
            "priceChange": 2.38,
            "priceLastChange": "10/14",
            "industry": "Retail",
            "desc": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "priceChangePct": 9.85
        }, {
            "id": 64,
            "name": "Eadel",
            "phone": "353-940-5410",
            "price": 80.18,
            "priceChange": 2.63,
            "priceLastChange": "10/16",
            "industry": "Medical",
            "desc": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "priceChangePct": 3.39
        }, {
            "id": 65,
            "name": "Wikibox",
            "phone": "992-708-2594",
            "price": 84.65,
            "priceChange": 4.18,
            "priceLastChange": "10/5",
            "industry": "Retail",
            "desc": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "priceChangePct": 5.19
        }, {
            "id": 66,
            "name": "Youopia",
            "phone": "462-373-9588",
            "price": 64.06,
            "priceChange": 4.28,
            "priceLastChange": "10/5",
            "industry": "Food",
            "desc": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "priceChangePct": 7.16
        }, {
            "id": 67,
            "name": "Edgeblab",
            "phone": "502-372-3812",
            "price": 30.6,
            "priceChange": -4.12,
            "priceLastChange": "10/10",
            "industry": "Automotive",
            "desc": "Fusce consequat. Nulla nisl. Nunc nisl.",
            "priceChangePct": -11.87
        }, {
            "id": 68,
            "name": "JumpXS",
            "phone": "145-573-3692",
            "price": 27.65,
            "priceChange": -4.44,
            "priceLastChange": "10/14",
            "industry": "Manufacturing",
            "desc": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
            "priceChangePct": -13.84
        }, {
            "id": 69,
            "name": "Skyvu",
            "phone": "502-411-8686",
            "price": 57.77,
            "priceChange": -2.65,
            "priceLastChange": "10/4",
            "industry": "Food",
            "desc": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "priceChangePct": -4.39
        }, {
            "id": 70,
            "name": "Flipbug",
            "phone": "522-768-1133",
            "price": 80.04,
            "priceChange": 0.31,
            "priceLastChange": "10/13",
            "industry": "Services",
            "desc": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            "priceChangePct": 0.39
        }, {
            "id": 71,
            "name": "Wordtune",
            "phone": "342-989-5892",
            "price": 53.64,
            "priceChange": -0.2,
            "priceLastChange": "10/2",
            "industry": "Services",
            "desc": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "priceChangePct": -0.37
        }, {
            "id": 72,
            "name": "Kamba",
            "phone": "842-977-2740",
            "price": 84.58,
            "priceChange": 2.47,
            "priceLastChange": "10/17",
            "industry": "Food",
            "desc": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
            "priceChangePct": 3.01
        }, {
            "id": 73,
            "name": "Skyble",
            "phone": "502-710-5986",
            "price": 37.61,
            "priceChange": 0.3,
            "priceLastChange": "10/2",
            "industry": "Food",
            "desc": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            "priceChangePct": 0.8
        }, {
            "id": 74,
            "name": "Lajo",
            "phone": "622-522-5934",
            "price": 89.56,
            "priceChange": 4.06,
            "priceLastChange": "10/11",
            "industry": "Manufacturing",
            "desc": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "priceChangePct": 4.75
        }, {
            "id": 75,
            "name": "Mynte",
            "phone": "342-657-8165",
            "price": 71.19,
            "priceChange": -4.55,
            "priceLastChange": "10/18",
            "industry": "Finance",
            "desc": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "priceChangePct": -6.01
        }, {
            "id": 76,
            "name": "Devbug",
            "phone": "351-802-1189",
            "price": 31.95,
            "priceChange": 4.6,
            "priceLastChange": "10/18",
            "industry": "Food",
            "desc": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "priceChangePct": 16.82
        }, {
            "id": 77,
            "name": "Trudeo",
            "phone": "355-931-4788",
            "price": 57,
            "priceChange": -3.41,
            "priceLastChange": "10/12",
            "industry": "Manufacturing",
            "desc": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "priceChangePct": -5.64
        }, {
            "id": 78,
            "name": "Twimm",
            "phone": "145-344-5265",
            "price": 35.03,
            "priceChange": -4.22,
            "priceLastChange": "10/6",
            "industry": "Food",
            "desc": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "priceChangePct": -10.75
        }, {
            "id": 79,
            "name": "Edgeblab",
            "phone": "632-603-3459",
            "price": 30.44,
            "priceChange": -0.87,
            "priceLastChange": "10/17",
            "industry": "Services",
            "desc": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
            "priceChangePct": -2.78
        }, {
            "id": 80,
            "name": "Yakidoo",
            "phone": "145-691-9042",
            "price": 43.55,
            "priceChange": -2.11,
            "priceLastChange": "10/11",
            "industry": "Automotive",
            "desc": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "priceChangePct": -4.62
        }, {
            "id": 81,
            "name": "Jaxspan",
            "phone": "862-322-9633",
            "price": 42.44,
            "priceChange": -4.68,
            "priceLastChange": "10/10",
            "industry": "Automotive",
            "desc": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "priceChangePct": -9.93
        }, {
            "id": 82,
            "name": "Realpoint",
            "phone": "502-180-8057",
            "price": 44.58,
            "priceChange": -1.62,
            "priceLastChange": "10/14",
            "industry": "Services",
            "desc": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "priceChangePct": -3.51
        }, {
            "id": 83,
            "name": "Voonyx",
            "phone": "351-412-4147",
            "price": 71.83,
            "priceChange": 0.21,
            "priceLastChange": "10/5",
            "industry": "Manufacturing",
            "desc": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
            "priceChangePct": 0.29
        }, {
            "id": 84,
            "name": "Gabtune",
            "phone": "482-607-1635",
            "price": 39.98,
            "priceChange": 3.11,
            "priceLastChange": "10/15",
            "industry": "Food",
            "desc": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "priceChangePct": 8.44
        }, {
            "id": 85,
            "name": "Topicblab",
            "phone": "622-599-1742",
            "price": 79.32,
            "priceChange": 0.16,
            "priceLastChange": "10/3",
            "industry": "Retail",
            "desc": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            "priceChangePct": 0.2
        }, {
            "id": 86,
            "name": "Realbridge",
            "phone": "662-336-2221",
            "price": 69.83,
            "priceChange": 1.82,
            "priceLastChange": "10/14",
            "industry": "Manufacturing",
            "desc": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "priceChangePct": 2.68
        }, {
            "id": 87,
            "name": "Oyoba",
            "phone": "862-525-0830",
            "price": 47.04,
            "priceChange": 1.63,
            "priceLastChange": "10/14",
            "industry": "Retail",
            "desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "priceChangePct": 3.59
        }, {
            "id": 88,
            "name": "Tambee",
            "phone": "745-993-1655",
            "price": 29.26,
            "priceChange": 0.14,
            "priceLastChange": "10/7",
            "industry": "Retail",
            "desc": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "priceChangePct": 0.48
        }, {
            "id": 89,
            "name": "Gabtune",
            "phone": "542-938-0543",
            "price": 82.52,
            "priceChange": 2.56,
            "priceLastChange": "10/13",
            "industry": "Automotive",
            "desc": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            "priceChangePct": 3.2
        }, {
            "id": 90,
            "name": "Skiptube",
            "phone": "552-499-2316",
            "price": 20.15,
            "priceChange": 1.45,
            "priceLastChange": "10/17",
            "industry": "Retail",
            "desc": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "priceChangePct": 7.75
        }, {
            "id": 91,
            "name": "Skimia",
            "phone": "591-947-1885",
            "price": 56.5,
            "priceChange": -1.5,
            "priceLastChange": "10/8",
            "industry": "Medical",
            "desc": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "priceChangePct": -2.59
        }, {
            "id": 92,
            "name": "Jaxworks",
            "phone": "562-250-5384",
            "price": 87.72,
            "priceChange": -0.9,
            "priceLastChange": "10/18",
            "industry": "Services",
            "desc": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "priceChangePct": -1.02
        }, {
            "id": 93,
            "name": "Quatz",
            "phone": "385-589-2985",
            "price": 29.71,
            "priceChange": -0.48,
            "priceLastChange": "10/2",
            "industry": "Computer",
            "desc": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "priceChangePct": -1.59
        }, {
            "id": 94,
            "name": "Gigashots",
            "phone": "145-321-1934",
            "price": 58.79,
            "priceChange": 1.67,
            "priceLastChange": "10/6",
            "industry": "Retail",
            "desc": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
            "priceChangePct": 2.92
        }, {
            "id": 95,
            "name": "Edgeblab",
            "phone": "862-721-4334",
            "price": 33.14,
            "priceChange": -0.74,
            "priceLastChange": "10/8",
            "industry": "Manufacturing",
            "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
            "priceChangePct": -2.18
        }, {
            "id": 96,
            "name": "Vipe",
            "phone": "351-720-0324",
            "price": 60.94,
            "priceChange": -2.67,
            "priceLastChange": "10/18",
            "industry": "Medical",
            "desc": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "priceChangePct": -4.2
        }, {
            "id": 97,
            "name": "Zoonder",
            "phone": "632-839-5313",
            "price": 36.2,
            "priceChange": 1.86,
            "priceLastChange": "10/6",
            "industry": "Food",
            "desc": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
            "priceChangePct": 5.42
        }, {
            "id": 98,
            "name": "Zoovu",
            "phone": "862-687-7673",
            "price": 52.25,
            "priceChange": 1.07,
            "priceLastChange": "10/14",
            "industry": "Food",
            "desc": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
            "priceChangePct": 2.09
        }, {
            "id": 99,
            "name": "Kamba",
            "phone": "351-618-0859",
            "price": 49.84,
            "priceChange": 2.32,
            "priceLastChange": "10/16",
            "industry": "Computer",
            "desc": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
            "priceChangePct": 4.88
        }, {
            "id": 100,
            "name": "Twimm",
            "phone": "862-401-6472",
            "price": 56.27,
            "priceChange": -4.32,
            "priceLastChange": "10/1",
            "industry": "Finance",
            "desc": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "priceChangePct": -7.13
        }
    ];


    //from https://git.daplie.com/Daplie/knuth-shuffle/
    /**
     * 洗牌，打乱原来的顺序
     * @param {*array} array 
     */
    function shuffle(array) {
        array = Ext.Array.clone(array);

        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);

            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];

            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    Ext.ux.ajax.SimManager.register({
        type: 'json',
        delay: 300,
        url: /\/MyKitchen\/Company(\/\d+)?/,

        data: function (ctx) {
            var idPart = ctx.url.match(this.url)[1],
                id;

            if (idPart) {
                id = parseInt(idPart.substring(1), 10);

                return Ext.Array.findBy(companies, function (company) {
                    return company.id === id;
                });
            } else if (ctx.params.shuffle) {
                return shuffle(companies);
            }

            return companies;
        }
    });
});
