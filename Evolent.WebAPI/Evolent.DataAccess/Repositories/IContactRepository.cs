﻿using Sheetal.Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sheetal.DataAccess.Repositories
{
    public interface IContactRepository
    {
        List<ContactDTO> GetContactList();
        
        ResponseDTO AddContactDetails(ContactDTO contactDTO);
        
        ResponseDTO UpdateContactDetails(ContactDTO contactDTO);
        
        ResponseDTO DeleteContactDetails(ContactDTO contactDTO);
    }
}
