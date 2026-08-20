window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "Cucumber",
    "totalScenarios": 2,
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 5454,
    "startedAt": "2026-08-20T12:47:48.211Z",
    "finishedAt": "2026-08-20T12:47:53.665Z",
    "testRunner": "Cucumber"
  },
  "scenarios": [
    {
      "name": "Adding numbers",
      "category": "Calculations",
      "outcome": "SUCCESS",
      "duration": 2906,
      "startedAt": "2026-08-20T12:47:48.211Z",
      "source": {
        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
        "line": 12
      },
      "tags": [
        {
          "type": "capability",
          "name": "Super calculator"
        },
        {
          "type": "feature",
          "name": "Calculations"
        },
        {
          "type": "tag",
          "name": "important"
        },
        {
          "type": "tag",
          "name": "smoke"
        },
        {
          "type": "browser",
          "name": "chrome 129.0.6668.100"
        },
        {
          "type": "platform",
          "name": "Linux"
        },
        {
          "type": "module",
          "name": "serenity-js-cucumber-protractor-template"
        }
      ],
      "activities": [
        {
          "name": "Before",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Task",
          "startedAt": "2026-08-20T12:47:48.215Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/support/serenity.config.ts",
            "line": 6
          }
        },
        {
          "name": "Given Callie decides to use the Super Calculator",
          "outcome": "SUCCESS",
          "duration": 455,
          "children": [
            {
              "name": "Callie navigates to \"/protractor-demo/\"",
              "outcome": "SUCCESS",
              "duration": 365,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T12:47:48.246Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                "line": 171,
                "column": 33
              },
              "artifacts": [
                {
                  "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-navigates-to---protractor-dem-0816e359c0.png",
                  "type": "screenshot"
                }
              ]
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T12:47:48.217Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
            "line": 9
          }
        },
        {
          "name": "When she adds 19 and 23",
          "outcome": "SUCCESS",
          "duration": 645,
          "children": [
            {
              "name": "Callie enters a left operand of 19",
              "outcome": "SUCCESS",
              "duration": 158,
              "children": [
                {
                  "name": "Callie enters 19 into left operand input",
                  "outcome": "SUCCESS",
                  "duration": 75,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:48.693Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterLeftSideOperand.ts",
                    "line": 10,
                    "column": 35
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-19-into-left-operand-i-e178aad1cc.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:48.693Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                "line": 22,
                "column": 30
              }
            },
            {
              "name": "Callie selects the + operator",
              "outcome": "SUCCESS",
              "duration": 124,
              "children": [
                {
                  "name": "Callie selects \"+\" from operator dropdown",
                  "outcome": "SUCCESS",
                  "duration": 52,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:48.862Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/SelectOperator.ts",
                    "line": 9,
                    "column": 35
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-selects-----from-operator-dro-c1330057c0.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:48.862Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                "line": 23,
                "column": 24
              }
            },
            {
              "name": "Callie enters a right operand of 23",
              "outcome": "SUCCESS",
              "duration": 139,
              "children": [
                {
                  "name": "Callie enters 23 into right operand input",
                  "outcome": "SUCCESS",
                  "duration": 56,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:48.997Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterRightSideOperand.ts",
                    "line": 10,
                    "column": 35
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-23-into-right-operand--5795a176f2.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:48.997Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                "line": 24,
                "column": 31
              }
            },
            {
              "name": "Callie confirms calculation",
              "outcome": "SUCCESS",
              "duration": 162,
              "children": [
                {
                  "name": "Callie clicks on \"Go\" button",
                  "outcome": "SUCCESS",
                  "duration": 79,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:49.146Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/ConfirmCalculation.ts",
                    "line": 8,
                    "column": 15
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-clicks-on--go--button-450a5e669a.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:49.146Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                "line": 25,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T12:47:48.672Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
            "line": 20
          }
        },
        {
          "name": "Then she should see that the result is 42",
          "outcome": "SUCCESS",
          "duration": 1786,
          "children": [
            {
              "name": "Callie ensures that the text of result does equal \"42\"",
              "outcome": "SUCCESS",
              "duration": 1738,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T12:47:49.324Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                "line": 135,
                "column": 16
              },
              "artifacts": [
                {
                  "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-ensures-that-the-text-of-resu-3263174fa3.png",
                  "type": "screenshot"
                }
              ]
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T12:47:49.318Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
            "line": 21
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "3649",
          "timestamp": "2026-08-18T15:01:46.857Z",
          "duration": 2909,
          "activities": [
            {
              "name": "Before",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-18T15:01:46.860Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/support/serenity.config.ts",
                "line": 6
              }
            },
            {
              "name": "Given Callie decides to use the Super Calculator",
              "outcome": "SUCCESS",
              "duration": 433,
              "children": [
                {
                  "name": "Callie navigates to \"/protractor-demo/\"",
                  "outcome": "SUCCESS",
                  "duration": 361,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-18T15:01:46.873Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                    "line": 171,
                    "column": 33
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-navigates-to---protractor-dem-0816e359c0.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T15:01:46.863Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 9
              }
            },
            {
              "name": "When she adds 19 and 23",
              "outcome": "SUCCESS",
              "duration": 653,
              "children": [
                {
                  "name": "Callie enters a left operand of 19",
                  "outcome": "SUCCESS",
                  "duration": 147,
                  "children": [
                    {
                      "name": "Callie enters 19 into left operand input",
                      "outcome": "SUCCESS",
                      "duration": 75,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:01:47.317Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterLeftSideOperand.ts",
                        "line": 10,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-19-into-left-operand-i-91668c2037.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T15:01:47.316Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 22,
                    "column": 30
                  }
                },
                {
                  "name": "Callie selects the + operator",
                  "outcome": "SUCCESS",
                  "duration": 139,
                  "children": [
                    {
                      "name": "Callie selects \"+\" from operator dropdown",
                      "outcome": "SUCCESS",
                      "duration": 56,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:01:47.474Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/SelectOperator.ts",
                        "line": 9,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-selects-----from-operator-dro-c1330057c0.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T15:01:47.473Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 23,
                    "column": 24
                  }
                },
                {
                  "name": "Callie enters a right operand of 23",
                  "outcome": "SUCCESS",
                  "duration": 153,
                  "children": [
                    {
                      "name": "Callie enters 23 into right operand input",
                      "outcome": "SUCCESS",
                      "duration": 60,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:01:47.623Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterRightSideOperand.ts",
                        "line": 10,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-23-into-right-operand--5795a176f2.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T15:01:47.623Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 24,
                    "column": 31
                  }
                },
                {
                  "name": "Callie confirms calculation",
                  "outcome": "SUCCESS",
                  "duration": 152,
                  "children": [
                    {
                      "name": "Callie clicks on \"Go\" button",
                      "outcome": "SUCCESS",
                      "duration": 80,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:01:47.786Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/ConfirmCalculation.ts",
                        "line": 8,
                        "column": 15
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-clicks-on--go--button-b22f984455.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T15:01:47.786Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 25,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T15:01:47.296Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 20
              }
            },
            {
              "name": "Then she should see that the result is 42",
              "outcome": "SUCCESS",
              "duration": 1805,
              "children": [
                {
                  "name": "Callie ensures that the text of result does equal \"42\"",
                  "outcome": "SUCCESS",
                  "duration": 1747,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-18T15:01:47.956Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                    "line": 135,
                    "column": 16
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-ensures-that-the-text-of-resu-907f626030.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T15:01:47.949Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 21
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "3651",
          "timestamp": "2026-08-20T12:47:48.211Z",
          "duration": 2906,
          "activities": [
            {
              "name": "Before",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:48.215Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/support/serenity.config.ts",
                "line": 6
              }
            },
            {
              "name": "Given Callie decides to use the Super Calculator",
              "outcome": "SUCCESS",
              "duration": 455,
              "children": [
                {
                  "name": "Callie navigates to \"/protractor-demo/\"",
                  "outcome": "SUCCESS",
                  "duration": 365,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:48.246Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                    "line": 171,
                    "column": 33
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-navigates-to---protractor-dem-0816e359c0.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:48.217Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 9
              }
            },
            {
              "name": "When she adds 19 and 23",
              "outcome": "SUCCESS",
              "duration": 645,
              "children": [
                {
                  "name": "Callie enters a left operand of 19",
                  "outcome": "SUCCESS",
                  "duration": 158,
                  "children": [
                    {
                      "name": "Callie enters 19 into left operand input",
                      "outcome": "SUCCESS",
                      "duration": 75,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T12:47:48.693Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterLeftSideOperand.ts",
                        "line": 10,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-19-into-left-operand-i-e178aad1cc.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T12:47:48.693Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 22,
                    "column": 30
                  }
                },
                {
                  "name": "Callie selects the + operator",
                  "outcome": "SUCCESS",
                  "duration": 124,
                  "children": [
                    {
                      "name": "Callie selects \"+\" from operator dropdown",
                      "outcome": "SUCCESS",
                      "duration": 52,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T12:47:48.862Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/SelectOperator.ts",
                        "line": 9,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-selects-----from-operator-dro-c1330057c0.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T12:47:48.862Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 23,
                    "column": 24
                  }
                },
                {
                  "name": "Callie enters a right operand of 23",
                  "outcome": "SUCCESS",
                  "duration": 139,
                  "children": [
                    {
                      "name": "Callie enters 23 into right operand input",
                      "outcome": "SUCCESS",
                      "duration": 56,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T12:47:48.997Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterRightSideOperand.ts",
                        "line": 10,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-23-into-right-operand--5795a176f2.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T12:47:48.997Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 24,
                    "column": 31
                  }
                },
                {
                  "name": "Callie confirms calculation",
                  "outcome": "SUCCESS",
                  "duration": 162,
                  "children": [
                    {
                      "name": "Callie clicks on \"Go\" button",
                      "outcome": "SUCCESS",
                      "duration": 79,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T12:47:49.146Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/ConfirmCalculation.ts",
                        "line": 8,
                        "column": 15
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-clicks-on--go--button-450a5e669a.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T12:47:49.146Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 25,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:48.672Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 20
              }
            },
            {
              "name": "Then she should see that the result is 42",
              "outcome": "SUCCESS",
              "duration": 1786,
              "children": [
                {
                  "name": "Callie ensures that the text of result does equal \"42\"",
                  "outcome": "SUCCESS",
                  "duration": 1738,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:49.324Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                    "line": 135,
                    "column": 16
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-ensures-that-the-text-of-resu-3263174fa3.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:49.318Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 21
              }
            }
          ]
        }
      ],
      "narrative": "<p>In order to learn how to use Serenity/JS with Cucumber and Protractor\nAs a Curious Developer\nI&#39;d like to see an example</p>\n",
      "description": "<p>The <a href=\"https://juliemr.github.io/protractor-demo/\">&quot;Super Calculator&quot;</a> was developed by Julie Ralph,\nthe author of Protractor, to demonstrate what Protractor is capable of.</p>\n<p>By the way, did you notice that with <strong>Serenity/JS</strong> you can use <a href=\"https://en.wikipedia.org/wiki/Markdown\">Markdown</a>\nto better describe each <code>Feature</code> and <code>Scenario</code>?</p>\n",
      "cast": [
        {
          "name": "Callie",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithProtractor"
            }
          ]
        }
      ]
    },
    {
      "name": "Multiplying numbers",
      "category": "Calculations",
      "outcome": "SUCCESS",
      "duration": 2544,
      "startedAt": "2026-08-20T12:47:51.121Z",
      "source": {
        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
        "line": 24
      },
      "tags": [
        {
          "type": "capability",
          "name": "Super calculator"
        },
        {
          "type": "feature",
          "name": "Calculations"
        },
        {
          "type": "tag",
          "name": "fast"
        },
        {
          "type": "tag",
          "name": "smoke"
        },
        {
          "type": "browser",
          "name": "chrome 129.0.6668.100"
        },
        {
          "type": "platform",
          "name": "Linux"
        },
        {
          "type": "module",
          "name": "serenity-js-cucumber-protractor-template"
        }
      ],
      "activities": [
        {
          "name": "Before",
          "outcome": "SUCCESS",
          "duration": 0,
          "children": [],
          "type": "Task",
          "startedAt": "2026-08-20T12:47:51.122Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/support/serenity.config.ts",
            "line": 6
          }
        },
        {
          "name": "Given Callie decides to use the Super Calculator",
          "outcome": "SUCCESS",
          "duration": 182,
          "children": [
            {
              "name": "Callie navigates to \"/protractor-demo/\"",
              "outcome": "SUCCESS",
              "duration": 129,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T12:47:51.124Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                "line": 171,
                "column": 33
              },
              "artifacts": [
                {
                  "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-navigates-to---protractor-dem-0816e359c0.png",
                  "type": "screenshot"
                }
              ]
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T12:47:51.122Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
            "line": 9
          }
        },
        {
          "name": "When she multiplies 6 and 2",
          "outcome": "SUCCESS",
          "duration": 511,
          "children": [
            {
              "name": "Callie enters a left operand of 6",
              "outcome": "SUCCESS",
              "duration": 125,
              "children": [
                {
                  "name": "Callie enters 6 into left operand input",
                  "outcome": "SUCCESS",
                  "duration": 72,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:51.315Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterLeftSideOperand.ts",
                    "line": 10,
                    "column": 35
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-6-into-left-operand-in-ac2b2b6541.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:51.315Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                "line": 30,
                "column": 30
              }
            },
            {
              "name": "Callie selects the * operator",
              "outcome": "SUCCESS",
              "duration": 101,
              "children": [
                {
                  "name": "Callie selects \"*\" from operator dropdown",
                  "outcome": "SUCCESS",
                  "duration": 49,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:51.451Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/SelectOperator.ts",
                    "line": 9,
                    "column": 35
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-selects-----from-operator-dro-169072d247.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:51.451Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                "line": 31,
                "column": 24
              }
            },
            {
              "name": "Callie enters a right operand of 2",
              "outcome": "SUCCESS",
              "duration": 116,
              "children": [
                {
                  "name": "Callie enters 2 into right operand input",
                  "outcome": "SUCCESS",
                  "duration": 54,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:51.562Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterRightSideOperand.ts",
                    "line": 10,
                    "column": 35
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-2-into-right-operand-i-22ef49fb37.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:51.562Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                "line": 32,
                "column": 31
              }
            },
            {
              "name": "Callie confirms calculation",
              "outcome": "SUCCESS",
              "duration": 117,
              "children": [
                {
                  "name": "Callie clicks on \"Go\" button",
                  "outcome": "SUCCESS",
                  "duration": 76,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:51.688Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/ConfirmCalculation.ts",
                    "line": 8,
                    "column": 15
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-clicks-on--go--button-8d9a0138e6.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:51.688Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                "line": 33,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T12:47:51.305Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
            "line": 26
          }
        },
        {
          "name": "Then she should see that the result is 12",
          "outcome": "SUCCESS",
          "duration": 1838,
          "children": [
            {
              "name": "Callie ensures that the text of result does equal \"12\"",
              "outcome": "SUCCESS",
              "duration": 1781,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T12:47:51.821Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                "line": 135,
                "column": 16
              },
              "artifacts": [
                {
                  "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-ensures-that-the-text-of-resu-4dea3d530a.png",
                  "type": "screenshot"
                }
              ]
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T12:47:51.816Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
            "line": 27
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "3649",
          "timestamp": "2026-08-18T15:01:46.857Z",
          "duration": 2651,
          "activities": [
            {
              "name": "Before",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-18T15:01:49.773Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/support/serenity.config.ts",
                "line": 6
              }
            },
            {
              "name": "Given Callie decides to use the Super Calculator",
              "outcome": "SUCCESS",
              "duration": 212,
              "children": [
                {
                  "name": "Callie navigates to \"/protractor-demo/\"",
                  "outcome": "SUCCESS",
                  "duration": 139,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-18T15:01:49.775Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                    "line": 171,
                    "column": 33
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-navigates-to---protractor-dem-0816e359c0.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T15:01:49.774Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 9
              }
            },
            {
              "name": "When she multiplies 6 and 2",
              "outcome": "SUCCESS",
              "duration": 597,
              "children": [
                {
                  "name": "Callie enters a left operand of 6",
                  "outcome": "SUCCESS",
                  "duration": 190,
                  "children": [
                    {
                      "name": "Callie enters 6 into left operand input",
                      "outcome": "SUCCESS",
                      "duration": 138,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:01:49.998Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterLeftSideOperand.ts",
                        "line": 10,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-6-into-left-operand-in-120521bd59.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T15:01:49.998Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 30,
                    "column": 30
                  }
                },
                {
                  "name": "Callie selects the * operator",
                  "outcome": "SUCCESS",
                  "duration": 112,
                  "children": [
                    {
                      "name": "Callie selects \"*\" from operator dropdown",
                      "outcome": "SUCCESS",
                      "duration": 51,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:01:50.198Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/SelectOperator.ts",
                        "line": 9,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-selects-----from-operator-dro-dfc9988845.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T15:01:50.198Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 31,
                    "column": 24
                  }
                },
                {
                  "name": "Callie enters a right operand of 2",
                  "outcome": "SUCCESS",
                  "duration": 107,
                  "children": [
                    {
                      "name": "Callie enters 2 into right operand input",
                      "outcome": "SUCCESS",
                      "duration": 57,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:01:50.321Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterRightSideOperand.ts",
                        "line": 10,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-2-into-right-operand-i-885c9bc7a8.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T15:01:50.321Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 32,
                    "column": 31
                  }
                },
                {
                  "name": "Callie confirms calculation",
                  "outcome": "SUCCESS",
                  "duration": 133,
                  "children": [
                    {
                      "name": "Callie clicks on \"Go\" button",
                      "outcome": "SUCCESS",
                      "duration": 82,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:01:50.439Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/ConfirmCalculation.ts",
                        "line": 8,
                        "column": 15
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-clicks-on--go--button-8e8356c87c.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T15:01:50.439Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 33,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T15:01:49.986Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 26
              }
            },
            {
              "name": "Then she should see that the result is 12",
              "outcome": "SUCCESS",
              "duration": 1829,
              "children": [
                {
                  "name": "Callie ensures that the text of result does equal \"12\"",
                  "outcome": "SUCCESS",
                  "duration": 1773,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-18T15:01:50.588Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                    "line": 135,
                    "column": 16
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3649/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-ensures-that-the-text-of-resu-67c174d566.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T15:01:50.583Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 27
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "3651",
          "timestamp": "2026-08-20T12:47:48.211Z",
          "duration": 2544,
          "activities": [
            {
              "name": "Before",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:51.122Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/support/serenity.config.ts",
                "line": 6
              }
            },
            {
              "name": "Given Callie decides to use the Super Calculator",
              "outcome": "SUCCESS",
              "duration": 182,
              "children": [
                {
                  "name": "Callie navigates to \"/protractor-demo/\"",
                  "outcome": "SUCCESS",
                  "duration": 129,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:51.124Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                    "line": 171,
                    "column": 33
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-navigates-to---protractor-dem-0816e359c0.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:51.122Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 9
              }
            },
            {
              "name": "When she multiplies 6 and 2",
              "outcome": "SUCCESS",
              "duration": 511,
              "children": [
                {
                  "name": "Callie enters a left operand of 6",
                  "outcome": "SUCCESS",
                  "duration": 125,
                  "children": [
                    {
                      "name": "Callie enters 6 into left operand input",
                      "outcome": "SUCCESS",
                      "duration": 72,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T12:47:51.315Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterLeftSideOperand.ts",
                        "line": 10,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-6-into-left-operand-in-ac2b2b6541.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T12:47:51.315Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 30,
                    "column": 30
                  }
                },
                {
                  "name": "Callie selects the * operator",
                  "outcome": "SUCCESS",
                  "duration": 101,
                  "children": [
                    {
                      "name": "Callie selects \"*\" from operator dropdown",
                      "outcome": "SUCCESS",
                      "duration": 49,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T12:47:51.451Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/SelectOperator.ts",
                        "line": 9,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-selects-----from-operator-dro-169072d247.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T12:47:51.451Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 31,
                    "column": 24
                  }
                },
                {
                  "name": "Callie enters a right operand of 2",
                  "outcome": "SUCCESS",
                  "duration": 116,
                  "children": [
                    {
                      "name": "Callie enters 2 into right operand input",
                      "outcome": "SUCCESS",
                      "duration": 54,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T12:47:51.562Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/EnterRightSideOperand.ts",
                        "line": 10,
                        "column": 35
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-enters-2-into-right-operand-i-22ef49fb37.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T12:47:51.562Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 32,
                    "column": 31
                  }
                },
                {
                  "name": "Callie confirms calculation",
                  "outcome": "SUCCESS",
                  "duration": 117,
                  "children": [
                    {
                      "name": "Callie clicks on \"Go\" button",
                      "outcome": "SUCCESS",
                      "duration": 76,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T12:47:51.688Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/test/super-calculator/ConfirmCalculation.ts",
                        "line": 8,
                        "column": 15
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-clicks-on--go--button-8d9a0138e6.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T12:47:51.688Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/step_definitions/super_calculator.steps.ts",
                    "line": 33,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:51.305Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 26
              }
            },
            {
              "name": "Then she should see that the result is 12",
              "outcome": "SUCCESS",
              "duration": 1838,
              "children": [
                {
                  "name": "Callie ensures that the text of result does equal \"12\"",
                  "outcome": "SUCCESS",
                  "duration": 1781,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T12:47:51.821Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                    "line": 135,
                    "column": 16
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3651/serenity-js-cucumber-protractor-template-1/screenshot-linux-chrome-129-0-6668-100-callie-ensures-that-the-text-of-resu-4dea3d530a.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T12:47:51.816Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-protractor-template/serenity-js-cucumber-protractor-template/features/super_calculator/calculations.feature",
                "line": 27
              }
            }
          ]
        }
      ],
      "narrative": "<p>In order to learn how to use Serenity/JS with Cucumber and Protractor\nAs a Curious Developer\nI&#39;d like to see an example</p>\n",
      "cast": [
        {
          "name": "Callie",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithProtractor"
            }
          ]
        }
      ]
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-18T15:01:46.857Z",
      "duration": 5566,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "3649",
      "slowest": 2909,
      "fastest": 2651,
      "average": 2780,
      "commit": "2b413813af19ce61fe2f13f30440d0870cb1f7f8",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-cucumber-protractor-template/actions/runs/32151758074",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-cucumber-protractor-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    },
    {
      "timestamp": "2026-08-20T12:47:48.211Z",
      "duration": 5454,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "3651",
      "slowest": 2906,
      "fastest": 2544,
      "average": 2725,
      "commit": "b7dc92ea3b8c3352aaf961309274742403ab6fb9",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-cucumber-protractor-template/actions/runs/32370567094",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-cucumber-protractor-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "capability",
      "name": "Super calculator",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Calculations",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "important",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "smoke",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "browser",
      "name": "chrome 129.0.6668.100",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "platform",
      "name": "Linux",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-cucumber-protractor-template",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "fast",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.19.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.45.7",
    "testRunner": {
      "name": "Cucumber",
      "version": "13.2.1"
    },
    "browsers": [
      {
        "name": "chrome",
        "version": "129.0.6668.100"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "3651",
      "branch": "main",
      "commit": "b7dc92ea3b8c3352aaf961309274742403ab6fb9",
      "commitMessage": "Merge pull request #1416 from serenity-js/docs/improve-readme-onboarding",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-cucumber-protractor-template/actions/runs/32370567094",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-cucumber-protractor-template",
      "triggeredBy": "jan-molak"
    },
    "projectName": "@serenity-js/serenity-js-cucumber-protractor-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "features",
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 2,
    "children": [
      {
        "type": "directory",
        "name": "super_calculator",
        "outcomes": {
          "passed": 2,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 2,
        "children": [
          {
            "type": "file",
            "name": "calculations",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "Adding numbers",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS",
                  "SUCCESS"
                ]
              },
              {
                "name": "Multiplying numbers",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS",
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "In order to learn how to use Serenity/JS with Cucumber and Protractor\nAs a Curious Developer\nI'd like to see an example",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        },
        "readme": "<p>Super Calculator</p>\n<p>Narrative:\nIn order to spend <em>less time</em> with pen and pencil\nAs a high performer\nI&#39;d like to be able to calculate things <strong>quicker</strong></p>\n<p>This note is called <em>&quot;the narrative&quot;</em>. It can be used to provide the context around the business capability of your\nproduct (&quot;Efficiency&quot; features in this case) and its features that help to enable this capability.</p>\n<p><strong>Please note:</strong> While <a href=\"https://github.com/cucumber/cucumber-js\" target=\"_blank\" rel=\"noopener\">Cucumber</a> allows you to capture a description\nof each feature in the <code>.feature</code> file, <a href=\"https://serenity-js.org\" target=\"_blank\" rel=\"noopener\">Serenity/JS</a> allows us to group those <code>.feature</code>\nfiles in directories corresponding to &quot;epics&quot;, &quot;themes&quot; or &quot;business capabilities&quot; of your system and provide\neach one of those with additional context using this <code>narrative.txt</code> file.</p>\n<p><strong>By the way:</strong> Did you notice that you can use <strong><a href=\"https://www.markdownguide.org/\" target=\"_blank\" rel=\"noopener\">markdown syntax</a></strong> to better express\nyour thoughts?</p>\n"
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "features"
};
