Feature: Create Workers Compensation Policy

@CreateWorkersCompensationPolicy
Scenario: Create Workers Compensation Policy
 Given Login to Policy Center
When Search for existing Account
When Select Workers Compensation
When Answer WC PreQualification Yes and No questions
    | Do employees deep fry foods?                                | Yes     |
    | Does your business handle fuels or any explosive materials? | No      |
    | Do any employees operate motorized vehicles as part of normal job responsibilities (delivery drivers, forklift operators, etc.)? | No |
    | Does your business operate 24 hours/day? | Yes |    
    | Is your business unionized? | Yes |
# And Answer WC PreQualification Total Annual Payroll
#     | Total annual payroll: | 12000 |
When WC Process
When Answer WC Supplememntal
    # Below line is use for default answer for all questions Yes or No
    #| DefaultAnswer | No | 
    # Below line is use to answer on specific questions
    # | Any employees under 16 or over 60 years of age? | Yes |
    # | Does applicant own, operate, or lease aircraft/watercraft? | Yes |
    # | Are athletic teams sponsored? | No |
    # | Are employee health plans provided? | No |
    # | Any work performed underground or above 15 feet? | Yes |
    # | Any group transportation provided? | Yes |
    # | Any employees with physical handicaps? | No |
    # | Do/Have past, present, or discontinued operations involve(d) storing, treating, discharging, applying, disposing or transporting of hazardous material? (e.g. landfills, wastes, fuel tanks, etc) | Yes |
    # | Is there a labor interchange with any other business/subsidiary? | No |
    # | Do you lease employees to or from other employers? | No |
    # | Is applicant engaged in any other type of business? | Yes |
    # | Any other insurance with this insurer | Yes |
    # | Do employees travel out of state? | No |
    # | Any work performed on barges, vessels, docks, bridge over water? | Yes |
    # | Are physicals required after offers of employment are made? | No |
    # | Any prior coverage declined/canceled/non-renewed (last 3 years)? Not Applicable in MO. | Yes |
    # | Is a written safety program in operation? | Yes |
    # | Any seasonal employees? | No |
    # | Are sub-contractors used? (If yes, give % of work subcontracted) | Yes |
    # | Any tax liens or bankruptcy within the last 5 years? | No |
    # | Any undisputed and unpaid workers | Yes |
    # | Is there any volunteer or donated labor? | No |
    # | Do any employees predominantly work at home? | Yes |
    # | Any work sublet without certificates of ins.? | No |
    
