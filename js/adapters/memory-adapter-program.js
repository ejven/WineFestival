app.adapters.program = (function () {

    var findById = function (id) {
            var deferred = $.Deferred();
            var program = null;
            var l = programItems.length;
            for (var i = 0; i < l; i++) {
                if (programItems[i].id === id) {
                    program = programItems[i];
                    break;
                }
            }
            deferred.resolve(program);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = programItems.filter(function (element) {
                var fullName = element.firstName + " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByManager = function (managerId) {
            var deferred = $.Deferred();
            var results = programItems.filter(function (element) {
                return managerId === element.managerId;
            });
            deferred.resolve(results);
            return deferred.promise();
        },
        
        all = function () {
        	var deferred = $.Deferred();
        	
        	deferred.resolve(programItems);
        	return deferred.promise();
        }

        programItems = [
            {"id": 1, "name": 'DÝŇOBRANÍ', "time": '10:00 - 18:00', "place": 'Palackého náměstí', "desc": 'Děti z MŠ a ZŠ představují nádherné kreace z dýní.' },
            {"id": 2, "name": 'VINNÝ STAN', "time": '16:00 - 22:00', "place": 'Masarykovo náměstí', "desc": 'Děti z MŠ a ZŠ představují nádherné kreace z dýní.' },
            {"id": 3, "name": 'VÍTEJTE NA SLOVÁCKU', "time": '20:00 ', "place": 'Kulturní dům Míkovice', "desc": 'Děti z MŠ a ZŠ představují nádherné kreace z dýní.' },
            
            {"id": 4, "name": 'VÍTEJTE V MAŘATICÍCH', "time": '07:30 ', "place": 'křižovatka Vinohradské a Družstevní ulice', "desc": 'Děti z MŠ a ZŠ představují nádherné kreace z dýní.' },
 		    {"id": 5, "name": 'VINNÝ STAN', "time": '08:00 - 22:00', "place": 'Masarykovo náměstí', "desc": 'Děti z MŠ a ZŠ představují nádherné kreace z dýní.' },
  			{"id": 6, "name": 'SLOVÁCKÁ JÍDELNA', "time": '08:00 - 17:00', "place": 'Palackého náměstí', "desc": 'Děti z MŠ a ZŠ představují nádherné kreace z dýní.' }
        ];

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        findByManager: findByManager,
        all: all
    };

}());