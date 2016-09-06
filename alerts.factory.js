angular.module('MakeRoof').factory('UiFactory', UiFactory);
UiFactory.$inject = ['$rootScope', '$uibModal', '$timeout'];

function UiFactory($rootScope, $uibModal, $timeout) {
    $rootScope.alertMessage = []; // Alert message
    $rootScope.datePick = { // Date picker
        opened1: false,
        opened12: false
    };
    $rootScope.closeAlert = function(index) {
        $rootScope.alertMessage.splice(index, 1);
    };
    return {
        alert: function(alertType, message) {
            $rootScope.alertMessage.push({
                type: alertType,
                msg: message
            });
            $timeout(function() {
                $rootScope.alertMessage = [];
            }, 3000);
        },
        datePicker: {
            dpPopup1: function() {
                $rootScope.datePick.opened1 = true;
            },
            dpPopup2: function() {
                $rootScope.datePick.opened2 = true;
            }
        },
        modal: {
            open: function(size, template) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: template,
                    controller: function($uibModalInstance) {
                        $rootScope.ok = function() {
                            $uibModalInstance.close();
                        };
                        $rootScope.dismissModal = function() {
                            $uibModalInstance.dismiss('cancel');
                        };
                    },
                    // backdrop: 'static',
                    size: size,
                });
            }
        }
    };
}
